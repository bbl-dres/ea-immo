// BBL Immobilienmanagement - D3.js Hierarchical Bubble Chart
// Concepts nested inside domain bubbles

(function() {
    'use strict';

    let domainData = null;
    let width, height;
    let zoom = null;
    let svg = null;
    let zoomGroup = null;

    // Mobile detection and state
    let isMobile = false;
    let isTouchDevice = false;
    let legendVisible = false;

    // Theme state
    let isLightMode = false;

    const colors = {
        muss: '#7ecba1',
        soll: '#f9d77e',
        sollte: '#f9d77e',
        kann: '#ffffff',
        könnte: '#ffffff',
        default: '#adb5bd'
    };

    const domainColors = {
        'architektonische-sicht': '#3498db',
        'projektmanagement': '#9b59b6',
        'dokumentenmanagement': '#e74c3c',
        'mietermanagement': '#1abc9c',
        'energie-ressourcen': '#2ecc71',
        'organisatorische-daten': '#f39c12',
        'workspace-management': '#e67e22',
        'finanzen': '#16a085',
        'portfoliomanagement': '#8e44ad',
        'controlling-analytics': '#2980b9',
        'objektmanagement': '#c0392b',
        'baustellenmanagement': '#d35400'
    };

    function getColor(priority) {
        const p = priority.toLowerCase();
        return colors[p] || colors.default;
    }

    function getDomainColor(domainId, alpha = 1) {
        const color = domainColors[domainId] || '#666';
        if (alpha === 1) return color;
        // Convert to rgba
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // Check if device is mobile or touch-enabled
    function detectMobile() {
        isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        isMobile = window.innerWidth <= 768;
        return isMobile;
    }

    // Initialize theme from localStorage or system preference
    function initTheme() {
        const savedTheme = localStorage.getItem('ea-immo-theme');
        if (savedTheme) {
            isLightMode = savedTheme === 'light';
        } else {
            // Check system preference
            isLightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        }
        applyTheme();
    }

    // Apply the current theme
    function applyTheme() {
        if (isLightMode) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }

    // Toggle theme (exposed to window for onclick)
    window.toggleTheme = function() {
        isLightMode = !isLightMode;
        applyTheme();
        localStorage.setItem('ea-immo-theme', isLightMode ? 'light' : 'dark');
    };

    // Initialize legend visibility based on screen size
    function initLegend() {
        const legend = document.getElementById('legend');
        const legendToggle = document.getElementById('legendToggle');

        if (isMobile) {
            legendVisible = false;
            legend.classList.remove('visible');
            legendToggle.style.display = 'block';
        } else {
            legendVisible = true;
            legend.classList.add('visible');
            legendToggle.style.display = 'none';
        }
    }

    // Toggle legend visibility (for mobile)
    window.toggleLegend = function() {
        const legend = document.getElementById('legend');
        legendVisible = !legendVisible;

        if (legendVisible) {
            legend.classList.add('visible');
        } else {
            legend.classList.remove('visible');
        }
    };

    async function init() {
        try {
            detectMobile();
            initTheme();
            const response = await fetch('data/Konzepte.json');
            domainData = await response.json();
            setupChart();
            render();
            initLegend();
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }

    function setupChart() {
        width = window.innerWidth;
        height = window.innerHeight;

        d3.select('#chart')
            .attr('width', width)
            .attr('height', height);

        window.addEventListener('resize', () => {
            const wasMobile = isMobile;
            width = window.innerWidth;
            height = window.innerHeight;
            detectMobile();

            // Update legend visibility on screen size change
            if (wasMobile !== isMobile) {
                initLegend();
            }

            d3.select('#chart').attr('width', width).attr('height', height);
            render();
        });
    }

    function render() {
        svg = d3.select('#chart');
        svg.selectAll('*').remove();

        // Setup zoom behavior
        zoom = d3.zoom()
            .scaleExtent([0.3, 4])
            .on('zoom', (event) => {
                zoomGroup.attr('transform', event.transform);
            });

        svg.call(zoom);

        // Create a group for all zoomable content
        zoomGroup = svg.append('g')
            .attr('class', 'zoom-group');

        // Build hierarchy data with 3 levels: domain > group > concept
        const hierarchyData = {
            name: 'root',
            children: domainData.domains.map(domain => {
                const groups = [];
                if (domain.groups && domain.groups.length > 0) {
                    domain.groups.forEach(g => {
                        if (g.concepts && g.concepts.length > 0) {
                            groups.push({
                                name: g.name,
                                isGroup: true,
                                domainId: domain.id,
                                domainName: domain.name,
                                children: g.concepts.map(c => ({
                                    name: c.name,
                                    value: 1,
                                    priority: c.priority,
                                    concept: c,
                                    domainName: domain.name,
                                    groupName: g.name
                                }))
                            });
                        }
                    });
                }
                // Add placeholder if no groups
                if (groups.length === 0) {
                    groups.push({
                        name: 'Keine Konzepte',
                        isGroup: true,
                        placeholder: true,
                        domainId: domain.id,
                        domainName: domain.name,
                        children: [{
                            name: '-',
                            value: 1,
                            priority: 'default',
                            placeholder: true,
                            domainName: domain.name
                        }]
                    });
                }
                return {
                    name: domain.shortName || domain.name,
                    fullName: domain.name,
                    id: domain.id,
                    domain: domain,
                    children: groups
                };
            })
        };

        // Create pack layout with padding for each level
        const pack = d3.pack()
            .size([width - 40, height - 100])
            .padding(d => {
                if (d.depth === 0) return 40;  // Between domains
                if (d.depth === 1) return 8;   // Between groups in domain
                return 3;                       // Between concepts in group
            });

        const root = d3.hierarchy(hierarchyData)
            .sum(d => d.value || 0)
            .sort((a, b) => b.value - a.value);

        pack(root);

        // Calculate total concepts
        let totalConcepts = 0;
        domainData.domains.forEach(d => {
            if (d.groups) {
                d.groups.forEach(g => {
                    if (g.concepts) totalConcepts += g.concepts.length;
                });
            }
        });
        document.getElementById('legendTotal').textContent = totalConcepts;

        // Create container group with offset for header
        const g = zoomGroup.append('g')
            .attr('transform', 'translate(20, 70)');

        // Draw domain circles (depth 1)
        const domainNodes = root.descendants().filter(d => d.depth === 1);

        const domainGroups = g.selectAll('.domain-group')
            .data(domainNodes)
            .enter()
            .append('g')
            .attr('class', 'domain-group')
            .attr('transform', d => `translate(${d.x}, ${d.y})`);

        // Domain background circles
        domainGroups.append('circle')
            .attr('r', d => d.r)
            .attr('fill', d => getDomainColor(d.data.id, 0.12))
            .attr('stroke', d => getDomainColor(d.data.id))
            .attr('stroke-width', 3)
            .style('cursor', 'pointer')
            .on('click', (event, d) => {
                event.stopPropagation();
                showDomainPopup(d.data.domain);
            });

        // Domain labels - positioned outside at top with background
        const labels = domainGroups.append('g')
            .attr('transform', d => `translate(0, ${-d.r - 18})`);

        // Helper to count concepts in domain
        function countDomainConcepts(domain) {
            let count = 0;
            if (domain.groups) {
                domain.groups.forEach(g => {
                    if (g.concepts) count += g.concepts.length;
                });
            }
            return count;
        }

        // Label background - sized to fit text with count
        labels.append('rect')
            .attr('x', d => {
                const count = countDomainConcepts(d.data.domain);
                const text = d.data.name + ' (' + count + ')';
                return -(text.length * 4 + 12);
            })
            .attr('y', -14)
            .attr('width', d => {
                const count = countDomainConcepts(d.data.domain);
                const text = d.data.name + ' (' + count + ')';
                return text.length * 8 + 24;
            })
            .attr('height', 28)
            .attr('rx', 6)
            .attr('fill', d => getDomainColor(d.data.id))
            .attr('opacity', 0.95);

        // Label text - full name with count
        labels.append('text')
            .attr('y', 5)
            .attr('text-anchor', 'middle')
            .attr('fill', 'white')
            .attr('font-size', '13px')
            .attr('font-weight', 'bold')
            .style('pointer-events', 'none')
            .text(d => {
                const count = countDomainConcepts(d.data.domain);
                return d.data.name + ' (' + count + ')';
            });

        // Draw group circles (depth 2)
        const groupNodes = root.descendants().filter(d => d.depth === 2);

        const groupGroups = g.selectAll('.group-group')
            .data(groupNodes)
            .enter()
            .append('g')
            .attr('class', 'group-group')
            .attr('transform', d => `translate(${d.x}, ${d.y})`);

        // Group background circles
        groupGroups.append('circle')
            .attr('r', d => d.r)
            .attr('fill', d => d.data.placeholder ? 'rgba(100,100,100,0.1)' : getDomainColor(d.data.domainId, 0.25))
            .attr('stroke', d => d.data.placeholder ? 'transparent' : getDomainColor(d.data.domainId, 0.5))
            .attr('stroke-width', 1.5)
            .attr('stroke-dasharray', '4,2');

        // Group labels - with background badge for readability
        const groupLabels = groupGroups.filter(d => !d.data.placeholder && d.r > 35)
            .append('g')
            .attr('class', 'group-label')
            .attr('transform', d => `translate(0, ${-d.r + 12})`);

        // Helper to get group label text with count
        function getGroupLabelText(d) {
            const count = d.data.children ? d.data.children.length : 0;
            const baseName = d.data.name.length > 14 ? d.data.name.substring(0, 12) + '..' : d.data.name;
            return baseName + ' (' + count + ')';
        }

        // Label background pill
        groupLabels.append('rect')
            .attr('x', d => {
                const text = getGroupLabelText(d);
                return -(text.length * 3.5 + 8);
            })
            .attr('y', -9)
            .attr('width', d => {
                const text = getGroupLabelText(d);
                return text.length * 7 + 16;
            })
            .attr('height', 18)
            .attr('rx', 9)
            .attr('fill', 'rgba(0, 0, 0, 0.6)')
            .attr('stroke', d => getDomainColor(d.data.domainId, 0.6))
            .attr('stroke-width', 1);

        // Label text
        groupLabels.append('text')
            .attr('y', 4)
            .attr('text-anchor', 'middle')
            .attr('fill', 'white')
            .attr('font-size', '9px')
            .attr('font-weight', '500')
            .style('pointer-events', 'none')
            .text(d => getGroupLabelText(d));

        // Draw concept circles (depth 3)
        const conceptNodes = root.descendants().filter(d => d.depth === 3);

        const conceptGroups = g.selectAll('.concept-group')
            .data(conceptNodes)
            .enter()
            .append('g')
            .attr('class', 'concept-group')
            .attr('transform', d => `translate(${d.x}, ${d.y})`)
            .style('cursor', d => d.data.placeholder ? 'default' : 'pointer');

        // Concept circles
        conceptGroups.append('circle')
            .attr('r', d => d.r)
            .attr('fill', d => d.data.placeholder ? 'rgba(150,150,150,0.3)' : getColor(d.data.priority))
            .attr('stroke', d => d.data.placeholder ? 'transparent' : '#555')
            .attr('stroke-width', 1)
            .attr('opacity', d => d.data.placeholder ? 0.5 : 0.9);

        // Concept labels - scale font to fit circle
        conceptGroups.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '0.35em')
            .attr('fill', '#2c3e50')
            .attr('font-size', d => {
                if (d.data.placeholder) return '8px';
                const maxWidth = d.r * 1.8;
                const idealSize = maxWidth / (d.data.name.length * 0.55);
                return Math.max(5, Math.min(9, idealSize)) + 'px';
            })
            .attr('font-weight', '500')
            .style('pointer-events', 'none')
            .text(d => {
                if (d.data.placeholder) return '';
                const maxChars = Math.floor(d.r / 2.5);
                if (d.data.name.length > maxChars && maxChars > 3) {
                    return d.data.name.substring(0, maxChars - 2) + '..';
                }
                return d.data.name;
            });

        // Concept interactions - with touch support
        conceptGroups.filter(d => !d.data.placeholder)
            .on('mouseenter', function(event, d) {
                d3.select(this).select('circle')
                    .attr('opacity', 1)
                    .attr('stroke-width', 2);
                showTooltip(event, d.data.name, d.data.groupName + ' · ' + d.data.domainName);
            })
            .on('mousemove', (event) => moveTooltip(event))
            .on('mouseleave', function() {
                d3.select(this).select('circle')
                    .attr('opacity', 0.9)
                    .attr('stroke-width', 1);
                hideTooltip();
            })
            .on('click', (event, d) => {
                event.stopPropagation();
                showConceptPopup(d.data.concept, d.data.domainName);
            })
            .on('touchstart', function(event, d) {
                event.preventDefault();
                d3.select(this).select('circle')
                    .attr('opacity', 1)
                    .attr('stroke-width', 2);
            }, { passive: false })
            .on('touchend', function(event, d) {
                event.preventDefault();
                d3.select(this).select('circle')
                    .attr('opacity', 0.9)
                    .attr('stroke-width', 1);
                showConceptPopup(d.data.concept, d.data.domainName);
            }, { passive: false });

        // Domain interactions - with touch support
        domainGroups
            .on('mouseenter', function() {
                d3.select(this).select('circle').attr('stroke-width', 4);
            })
            .on('mouseleave', function() {
                d3.select(this).select('circle').attr('stroke-width', 3);
            })
            .on('touchstart', function(event) {
                event.preventDefault();
                d3.select(this).select('circle').attr('stroke-width', 4);
            }, { passive: false })
            .on('touchend', function(event, d) {
                event.preventDefault();
                d3.select(this).select('circle').attr('stroke-width', 3);
                showDomainPopup(d.data.domain);
            }, { passive: false });

        // Group interactions - with touch support
        groupGroups.filter(d => !d.data.placeholder)
            .style('cursor', 'pointer')
            .on('mouseenter', function(event, d) {
                d3.select(this).select('circle').attr('stroke-width', 2.5);
                showTooltip(event, d.data.name, d.data.domainName);
            })
            .on('mousemove', (event) => moveTooltip(event))
            .on('mouseleave', function() {
                d3.select(this).select('circle').attr('stroke-width', 1.5);
                hideTooltip();
            })
            .on('touchstart', function(event) {
                event.preventDefault();
                d3.select(this).select('circle').attr('stroke-width', 2.5);
            }, { passive: false })
            .on('touchend', function(event, d) {
                event.preventDefault();
                d3.select(this).select('circle').attr('stroke-width', 1.5);
                // For groups, show tooltip briefly then hide
                const touch = event.changedTouches[0];
                showTooltip({ clientX: touch.clientX, clientY: touch.clientY }, d.data.name, d.data.domainName);
            }, { passive: false });
    }

    // Tooltip functions with touch support
    let tooltipTimeout = null;

    function showTooltip(event, title, subtitle) {
        // Skip tooltip on touch devices for better UX (use tap for popup instead)
        if (isTouchDevice && event.type && event.type.startsWith('touch')) {
            return;
        }

        const tooltip = document.getElementById('tooltip');
        document.getElementById('tooltipTitle').textContent = title;
        document.getElementById('tooltipDomain').textContent = subtitle;
        tooltip.classList.add('visible');
        moveTooltip(event);

        // Auto-hide tooltip on touch after 2 seconds
        if (isTouchDevice) {
            clearTimeout(tooltipTimeout);
            tooltipTimeout = setTimeout(hideTooltip, 2000);
        }
    }

    function moveTooltip(event) {
        const tooltip = document.getElementById('tooltip');
        let x, y;

        // Handle both mouse and touch events
        if (event.touches && event.touches.length > 0) {
            x = event.touches[0].clientX;
            y = event.touches[0].clientY;
        } else {
            x = event.clientX;
            y = event.clientY;
        }

        // Position tooltip, ensuring it stays within viewport
        const tooltipRect = tooltip.getBoundingClientRect();
        const padding = 15;

        let left = x + padding;
        let top = y + padding;

        // Adjust if tooltip would go off screen
        if (left + tooltipRect.width > window.innerWidth) {
            left = x - tooltipRect.width - padding;
        }
        if (top + tooltipRect.height > window.innerHeight) {
            top = y - tooltipRect.height - padding;
        }

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    }

    function hideTooltip() {
        document.getElementById('tooltip').classList.remove('visible');
        clearTimeout(tooltipTimeout);
    }

    // Popup functions
    function showConceptPopup(concept, domainName) {
        const overlay = document.getElementById('popupOverlay');
        const title = document.getElementById('popupTitle');
        const subtitle = document.getElementById('popupSubtitle');
        const content = document.getElementById('popupContent');

        title.textContent = concept.name;
        subtitle.textContent = domainName;

        const priorityClass = concept.priority.toLowerCase();

        let html = `<span class="priority-badge ${priorityClass}">${concept.priority}</span>`;
        html += `<div class="popup-description">${concept.description}</div>`;

        if (concept.standards) {
            html += `
                <div class="popup-section">
                    <div class="popup-section-title">Relevante Standards</div>
                    <div class="standards-list">
                        ${concept.standards.split(',').map(s => `<span class="standard-tag">${s.trim()}</span>`).join('')}
                    </div>
                </div>
            `;
        }

        if (concept.comment) {
            html += `
                <div class="popup-section">
                    <div class="popup-section-title">Kommentar</div>
                    <p style="font-size: 0.9rem; color: #555;">${concept.comment}</p>
                </div>
            `;
        }

        content.innerHTML = html;
        overlay.classList.add('active');
    }

    function showDomainPopup(domain) {
        const overlay = document.getElementById('popupOverlay');
        const title = document.getElementById('popupTitle');
        const subtitle = document.getElementById('popupSubtitle');
        const content = document.getElementById('popupContent');

        let conceptCount = 0;
        if (domain.groups) {
            domain.groups.forEach(g => {
                if (g.concepts) conceptCount += g.concepts.length;
            });
        }

        title.textContent = domain.name;
        subtitle.textContent = domain.subtitle || `${conceptCount} Konzepte`;

        let html = '';

        if (domain.description) {
            html += `<div class="popup-description">${domain.description}</div>`;
        }

        if (domain.standards && domain.standards.length > 0) {
            html += `
                <div class="popup-section">
                    <div class="popup-section-title">Standards</div>
                    <div class="standards-list">
                        ${domain.standards.map(s => `<span class="standard-tag">${s}</span>`).join('')}
                    </div>
                </div>
            `;
        }

        if (domain.groups && domain.groups.length > 0) {
            domain.groups.forEach(group => {
                if (group.concepts && group.concepts.length > 0) {
                    html += `
                        <div class="popup-section">
                            <div class="popup-section-title">${group.name}</div>
                            <div class="standards-list">
                    `;
                    group.concepts.forEach(concept => {
                        const bg = getColor(concept.priority);
                        html += `<span class="concept-tag" style="background: ${bg};"
                            onclick="window.showConceptFromDomain('${encodeURIComponent(JSON.stringify(concept))}', '${domain.name}')">${concept.name}</span>`;
                    });
                    html += `</div></div>`;
                }
            });
        } else {
            html += `<p style="color: #888; font-style: italic;">Keine Konzepte für diese Domäne definiert.</p>`;
        }

        content.innerHTML = html;
        overlay.classList.add('active');
    }

    window.showConceptFromDomain = function(encoded, domainName) {
        const concept = JSON.parse(decodeURIComponent(encoded));
        showConceptPopup(concept, domainName);
    };

    window.closePopup = function(event) {
        if (!event || event.target.id === 'popupOverlay') {
            document.getElementById('popupOverlay').classList.remove('active');
        }
    };

    // View toggle
    window.setView = function(view) {
        const chartEl = document.getElementById('chart');
        const graphEl = document.getElementById('graphView');
        const tableEl = document.getElementById('tableView');
        const legendEl = document.getElementById('legend');
        const legendToggle = document.getElementById('legendToggle');
        const zoomEl = document.querySelector('.zoom-controls');
        const buttons = document.querySelectorAll('.toggle-btn');

        buttons.forEach(btn => btn.classList.remove('active'));

        chartEl.style.display = 'none';
        graphEl.style.display = 'none';
        tableEl.style.display = 'none';

        if (view === 'chart') {
            chartEl.style.display = 'block';
            legendEl.style.display = 'block';
            legendToggle.style.display = isMobile ? 'block' : 'none';
            zoomEl.style.display = 'flex';
            buttons[0].classList.add('active');
        } else if (view === 'graph') {
            graphEl.style.display = 'block';
            legendEl.style.display = 'block';
            legendToggle.style.display = isMobile ? 'block' : 'none';
            zoomEl.style.display = 'flex';
            buttons[1].classList.add('active');
            renderGraph();
        } else {
            tableEl.style.display = 'block';
            legendEl.style.display = 'none';
            legendToggle.style.display = 'none';
            zoomEl.style.display = 'none';
            buttons[2].classList.add('active');
            renderTable();
        }

        // Hide legend on mobile when switching views
        if (isMobile && view !== 'table') {
            legendVisible = false;
            legendEl.classList.remove('visible');
        }
    };

    let graphSvg = null;
    let graphZoom = null;
    let graphSimulation = null;

    function renderGraph() {
        graphSvg = d3.select('#graphView');

        // Check if already rendered
        if (graphSvg.select('.graph-container').size() > 0) return;

        graphSvg
            .attr('width', width)
            .attr('height', height);

        // Setup zoom for graph
        graphZoom = d3.zoom()
            .scaleExtent([0.2, 4])
            .on('zoom', (event) => {
                graphSvg.select('.graph-container').attr('transform', event.transform);
            });

        graphSvg.call(graphZoom);

        const container = graphSvg.append('g')
            .attr('class', 'graph-container');

        // Build nodes and links for 3 levels: domain > group > concept
        const nodes = [];
        const links = [];

        // Create domain nodes
        domainData.domains.forEach(domain => {
            nodes.push({
                id: 'domain:' + domain.id,
                name: domain.shortName || domain.name,
                type: 'domain',
                domain: domain,
                domainId: domain.id,
                priority: domain.priority
            });
        });

        // Create group and concept nodes
        domainData.domains.forEach(domain => {
            if (!domain.groups) return;

            domain.groups.forEach(group => {
                if (!group.concepts || group.concepts.length === 0) return;

                const groupId = 'group:' + domain.id + '/' + group.name;

                // Group node
                nodes.push({
                    id: groupId,
                    name: group.name,
                    type: 'group',
                    domain: domain,
                    domainId: domain.id,
                    groupName: group.name
                });

                // Link domain to group
                links.push({
                    source: 'domain:' + domain.id,
                    target: groupId,
                    type: 'domain-group',
                    domainId: domain.id
                });

                // Concept nodes
                group.concepts.forEach(concept => {
                    const conceptId = 'concept:' + domain.id + '/' + group.name + '/' + concept.name;

                    nodes.push({
                        id: conceptId,
                        name: concept.name,
                        type: 'concept',
                        concept: concept,
                        domain: domain,
                        domainId: domain.id,
                        groupName: group.name,
                        priority: concept.priority
                    });

                    // Link group to concept
                    links.push({
                        source: groupId,
                        target: conceptId,
                        type: 'group-concept',
                        domainId: domain.id
                    });
                });
            });
        });

        // Create inter-domain links
        if (domainData.connections) {
            domainData.connections.forEach(conn => {
                links.push({
                    source: 'domain:' + conn.from,
                    target: 'domain:' + conn.to,
                    type: 'domain-domain'
                });
            });
        }

        // Node size based on type
        function getNodeRadius(d) {
            if (d.type === 'domain') return 30;
            if (d.type === 'group') return 16;
            return 8;
        }

        // Create force simulation with more spacing
        graphSimulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links)
                .id(d => d.id)
                .distance(d => {
                    if (d.type === 'domain-domain') return 400;
                    if (d.type === 'domain-group') return 120;
                    return 70;
                })
                .strength(d => {
                    if (d.type === 'domain-domain') return 0.03;
                    if (d.type === 'domain-group') return 0.2;
                    return 0.4;
                }))
            .force('charge', d3.forceManyBody()
                .strength(d => {
                    if (d.type === 'domain') return -800;
                    if (d.type === 'group') return -200;
                    return -80;
                }))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(d => getNodeRadius(d) + 25))
            .force('x', d3.forceX(width / 2).strength(0.01))
            .force('y', d3.forceY(height / 2).strength(0.01));

        // Draw links
        const link = container.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(links)
            .enter()
            .append('line')
            .attr('class', d => 'graph-link ' + d.type)
            .attr('stroke', d => {
                if (d.type === 'domain-domain') return 'rgba(255,255,255,0.3)';
                return getDomainColor(d.domainId, 0.4);
            })
            .attr('stroke-width', d => {
                if (d.type === 'domain-domain') return 2;
                if (d.type === 'domain-group') return 1.5;
                return 1;
            })
            .attr('stroke-dasharray', d => d.type === 'domain-domain' ? '8,4' : null);

        // Draw nodes
        const node = container.append('g')
            .attr('class', 'nodes')
            .selectAll('g')
            .data(nodes)
            .enter()
            .append('g')
            .attr('class', d => 'graph-node graph-node-' + d.type)
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));

        // Node circles
        node.append('circle')
            .attr('r', d => getNodeRadius(d))
            .attr('fill', d => {
                if (d.type === 'domain') return getDomainColor(d.domainId);
                if (d.type === 'group') return getDomainColor(d.domainId, 0.6);
                return getColor(d.priority);
            })
            .attr('stroke', d => {
                if (d.type === 'domain') return '#fff';
                if (d.type === 'group') return getDomainColor(d.domainId);
                return '#555';
            })
            .attr('stroke-width', d => d.type === 'domain' ? 3 : d.type === 'group' ? 2 : 1);

        // Helper to get label text - show full name
        function getLabelText(d) {
            return d.name;
        }

        // Label backgrounds for group and concept nodes
        node.filter(d => d.type !== 'domain')
            .append('rect')
            .attr('class', 'label-bg')
            .attr('y', d => -getNodeRadius(d) - 16)
            .attr('height', 14)
            .attr('rx', 3)
            .attr('fill', 'rgba(0, 0, 0, 0.75)')
            .attr('x', function(d) {
                const text = getLabelText(d);
                const fontSize = d.type === 'group' ? 9 : 8;
                const width = text.length * fontSize * 0.55 + 8;
                return -width / 2;
            })
            .attr('width', function(d) {
                const text = getLabelText(d);
                const fontSize = d.type === 'group' ? 9 : 8;
                return text.length * fontSize * 0.55 + 8;
            });

        // Node labels
        node.append('text')
            .attr('class', 'graph-label')
            .attr('dy', d => d.type === 'domain' ? 5 : -getNodeRadius(d) - 5)
            .attr('text-anchor', 'middle')
            .attr('fill', '#fff')
            .attr('font-size', d => d.type === 'domain' ? '11px' : d.type === 'group' ? '9px' : '8px')
            .attr('font-weight', d => d.type === 'domain' ? 'bold' : '500')
            .text(d => getLabelText(d));

        // Node interactions - with touch support
        node.on('mouseenter', function(event, d) {
            const r = getNodeRadius(d);
            d3.select(this).select('circle')
                .attr('r', r * 1.2)
                .attr('stroke-width', d.type === 'domain' ? 4 : 3);

            if (d.type === 'domain') {
                showTooltip(event, d.domain.name, d.domain.priority + ' · ' + (d.domain.standards || []).slice(0, 3).join(', '));
            } else if (d.type === 'group') {
                showTooltip(event, d.name, d.domain.name);
            } else {
                showTooltip(event, d.name, d.groupName + ' · ' + d.domain.name);
            }
        })
        .on('mousemove', (event) => moveTooltip(event))
        .on('mouseleave', function(event, d) {
            d3.select(this).select('circle')
                .attr('r', getNodeRadius(d))
                .attr('stroke-width', d.type === 'domain' ? 3 : d.type === 'group' ? 2 : 1);
            hideTooltip();
        })
        .on('click', (event, d) => {
            event.stopPropagation();
            if (d.type === 'domain') {
                showDomainPopup(d.domain);
            } else if (d.type === 'concept') {
                showConceptPopup(d.concept, d.domain.name);
            }
        });

        // Touch-specific interactions for nodes (tap to show popup)
        node.on('touchend', function(event, d) {
            // Only trigger if it's a tap, not a drag
            if (event.defaultPrevented) return;

            event.preventDefault();
            event.stopPropagation();

            if (d.type === 'domain') {
                showDomainPopup(d.domain);
            } else if (d.type === 'concept') {
                showConceptPopup(d.concept, d.domain.name);
            }
        });

        // Tick function
        graphSimulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node.attr('transform', d => `translate(${d.x}, ${d.y})`);
        });

        // Drag functions
        function dragstarted(event, d) {
            if (!event.active) graphSimulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) graphSimulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    }

    function renderTable() {
        const tbody = document.getElementById('tableBody');
        if (tbody.children.length > 0) return; // Already rendered

        let html = '';

        domainData.domains.forEach(domain => {
            if (!domain.groups || domain.groups.length === 0) {
                html += `<tr>
                    <td class="domain-cell" style="color: ${getDomainColor(domain.id)}">${domain.name}</td>
                    <td class="group-cell">-</td>
                    <td>-</td>
                    <td class="priority-cell"><span class="priority-badge" style="background: #e9ecef; color: #666;">-</span></td>
                    <td class="description-cell">Keine Konzepte definiert</td>
                    <td class="standards-cell">-</td>
                </tr>`;
                return;
            }

            domain.groups.forEach((group, gi) => {
                if (!group.concepts || group.concepts.length === 0) return;

                group.concepts.forEach((concept, ci) => {
                    const priorityColor = getColor(concept.priority);
                    const textColor = concept.priority.toLowerCase() === 'muss' ? '#1a5f3a' :
                                     concept.priority.toLowerCase().includes('soll') ? '#7a5d00' : '#495057';

                    html += `<tr>
                        <td class="domain-cell" style="color: ${getDomainColor(domain.id)}">${gi === 0 && ci === 0 ? domain.name : ''}</td>
                        <td class="group-cell">${ci === 0 ? group.name : ''}</td>
                        <td><strong>${concept.name}</strong></td>
                        <td class="priority-cell">
                            <span class="priority-badge" style="background: ${priorityColor}; color: ${textColor};">${concept.priority}</span>
                        </td>
                        <td class="description-cell">${concept.description || '-'}</td>
                        <td class="standards-cell">${concept.standards || '-'}</td>
                    </tr>`;
                });
            });
        });

        tbody.innerHTML = html;
    }

    // Zoom controls
    window.zoomIn = function() {
        const chartVisible = document.getElementById('chart').style.display !== 'none';
        if (chartVisible) {
            svg.transition().duration(300).call(zoom.scaleBy, 1.4);
        } else if (graphSvg && graphZoom) {
            graphSvg.transition().duration(300).call(graphZoom.scaleBy, 1.4);
        }
    };

    window.zoomOut = function() {
        const chartVisible = document.getElementById('chart').style.display !== 'none';
        if (chartVisible) {
            svg.transition().duration(300).call(zoom.scaleBy, 0.7);
        } else if (graphSvg && graphZoom) {
            graphSvg.transition().duration(300).call(graphZoom.scaleBy, 0.7);
        }
    };

    window.zoomReset = function() {
        const chartVisible = document.getElementById('chart').style.display !== 'none';
        if (chartVisible) {
            svg.transition().duration(300).call(zoom.transform, d3.zoomIdentity);
        } else if (graphSvg && graphZoom) {
            graphSvg.transition().duration(300).call(graphZoom.transform, d3.zoomIdentity);
        }
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePopup();
        if (e.key === '+' || e.key === '=') zoomIn();
        if (e.key === '-') zoomOut();
        if (e.key === '0') zoomReset();
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
