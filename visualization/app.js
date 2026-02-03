// BBL Immobilienmanagement - D3.js Hierarchical Bubble Chart
// Concepts nested inside domain bubbles

(function() {
    'use strict';

    let domainData = null;
    let width, height;
    let zoom = null;
    let svg = null;
    let zoomGroup = null;

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

    async function init() {
        try {
            const response = await fetch('../data/geschaeftsobjekte.json');
            domainData = await response.json();
            setupChart();
            render();
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
            width = window.innerWidth;
            height = window.innerHeight;
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
        document.getElementById('legendTotal').textContent = totalConcepts + ' Konzepte';

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

        // Concept interactions
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
            });

        // Domain hover
        domainGroups
            .on('mouseenter', function() {
                d3.select(this).select('circle').attr('stroke-width', 4);
            })
            .on('mouseleave', function() {
                d3.select(this).select('circle').attr('stroke-width', 3);
            });

        // Group hover - show tooltip with group name
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
            });
    }

    // Tooltip functions
    function showTooltip(event, title, subtitle) {
        const tooltip = document.getElementById('tooltip');
        document.getElementById('tooltipTitle').textContent = title;
        document.getElementById('tooltipDomain').textContent = subtitle;
        tooltip.classList.add('visible');
        moveTooltip(event);
    }

    function moveTooltip(event) {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.left = (event.clientX + 15) + 'px';
        tooltip.style.top = (event.clientY + 15) + 'px';
    }

    function hideTooltip() {
        document.getElementById('tooltip').classList.remove('visible');
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
        const tableEl = document.getElementById('tableView');
        const legendEl = document.querySelector('.legend');
        const buttons = document.querySelectorAll('.toggle-btn');

        buttons.forEach(btn => btn.classList.remove('active'));

        if (view === 'chart') {
            chartEl.style.display = 'block';
            tableEl.style.display = 'none';
            legendEl.style.display = 'block';
            buttons[0].classList.add('active');
        } else {
            chartEl.style.display = 'none';
            tableEl.style.display = 'block';
            legendEl.style.display = 'none';
            buttons[1].classList.add('active');
            renderTable();
        }
    };

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
        svg.transition().duration(300).call(zoom.scaleBy, 1.4);
    };

    window.zoomOut = function() {
        svg.transition().duration(300).call(zoom.scaleBy, 0.7);
    };

    window.zoomReset = function() {
        svg.transition().duration(300).call(zoom.transform, d3.zoomIdentity);
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
