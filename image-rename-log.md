# Image Rename Log

This log tracks all image renames and path updates made during the migration.

---

## Analyse - Übersicht Standards IMMO.md

### ✅ CORRECTED (2026-02-03)

The original image mapping was incorrect. Images were remapped based on visual comparison with the source PDF.

### Correct Image Mapping (30 total):

| # | Filename | Content Description |
|---|----------|---------------------|
| 01 | `_01_dreistufiges-metadatenmodell.png` | Dreistufiges Metadatenmodell (Die fachliche/physische Sicht) |
| 02 | `_02_priorisierung-relevanz.jpg` | Standards Priorisierung vs. Relevanz BBL scatter plot |
| 03 | `_03_rec-zusammenhaenge.png` | Real Estate Core - connections with other standards |
| 04 | `_04_rec-entitaeten.png` | RealEstateCore Structure diagram |
| 05 | `_05_rec-ontologie.png` | Real Estate Core full ontology network graph |
| 06 | `_06_rcis-bereiche.png` | RCIS 9 category descriptions |
| 07 | `_07_rcis-graph.png` | RCIS entities network graph |
| 08 | `_08_rcis-uml.png` | RCIS Physical Property UML model |
| 09 | `_09_ibpdi-domaenen.png` | IBPDI circular domain diagram |
| 10 | `_10_ibpdi-status.png` | IBPDI Datencluster colored circles |
| 11 | `_11_ibpdi-digital-twin.png` | IBPDI Digital Twin hierarchy |
| 12 | `_12_ibpdi-energie.png` | IBPDI Energy and Resources cluster |
| 13 | `_13_ibpdi-finanzen.png` | IBPDI Financials cluster |
| 14 | `_14_oscre-framework.png` | OSCRE Domain Framework circular diagram |
| 15 | `_15_oscre-datenmodell.png` | OSCRE Datenmodell UML |
| 16 | `_16_bim2fm-leitfaden.png` | BIM2FM Datenfeldkatalog Leitfaden cover |
| 17 | `_17_bim2fm-beschreibung.png` | BIM2FM description text |
| 18 | `_18_bim2fm-uml.png` | BIM2FM UML diagram |
| 19 | `_19_gefma-bauwerkstypen.png` | GEFMA 924 - 000 BAUWERKSTYPEN tree |
| 20 | `_20_gefma-baukonstruktionen.png` | GEFMA 924 - 300 BAUKONSTRUKTIONEN |
| 21 | `_21_gefma-technische-anlagen.png` | GEFMA 924 - 400 TECHNISCHE ANLAGEN |
| 22 | `_22_saref-bereiche.png` | SAREF modules overview |
| 23 | `_23_saref-core.png` | SAREF Core entities diagram |
| 24 | `_24_openbim-workflow.png` | Open BIM Workflow (Require→Produce→Review→Deliver) |
| 25 | `_25_ifc-domaenen.png` | IFC Datendomänen layer diagram |
| 26 | `_26_ifc-hierarchie-einfach.png` | IFC Spatial Hierarchy with building illustration |
| 27 | `_27_ifc-hierarchie-uml.png` | IFC Spatial Hierarchy UML |
| 28 | `_28_ida-anwendungsfall.png` | gif IDA Modell Anwendungsfall flow diagram |
| 29 | `_29_ida-entitaeten.png` | gif IDA Modell Entitäten (blue boxes) |
| 30 | `_30_ida-subsets.png` | gif IDA Subsets/Clusters descriptions |

### Cleanup:
- Deleted unused original source files
- Kept: `Datenstandards.xlsx`, `Standards.pbix`

---

## Architektonische Sicht.md

### Image Renames (3 matched):
1. `Tree-structure-of-the-IFC-format-Source-own-elaboration-based-on-wwwbuildbimcl (1).png` → `architektonische-sicht_01_ifc-hierarchie.png`
2. `BBL IMMO - Fachliches Datenmodell Studie - Fachliches Datenmodell BBL IMMO - Architektonische Sicht.jpg` → `architektonische-sicht_02_vereinfachte-darstellung.jpg`
3. `BBL IMMO - Architektonische Siche _ Mermaid Chart-2025-07-23-111609.png` → `architektonische-sicht_03_flowchart-geschaeftsobjekte.png`

### ⚠️ FLAGGED - Unmatched references (7 items - need manual review):
- `architektonische-sicht_domaenengruppen.png` - Vorschlag Domänengruppen IMMO (Line 63)
- `architektonische-sicht_gwr-datenmodell.png` - GWR Datenmodell (Line 399)
- `architektonische-sicht_av-schichten.png` - AV Schichten (Line 424)
- `architektonische-sicht_ech0129-austauschmodell.png` - eCH-0129 Austauschmodell (Line 439)
- `architektonische-sicht_bauen-digital-entitaeten.png` - Bauen Digital Entitäten (Line 473)
- `architektonische-sicht_rec-struktur.png` - Real Estate Core Struktur (Line 529)
- `architektonische-sicht_ebkph-anwendung.png` - eBKP-H Anwendung (Line 579)

### Unassigned images in assets folder (17 files):
- Various dated images (image-2025-*.png) that couldn't be auto-matched
- `Capture.JPG`, `Untitled diagram _ Mermaid Chart-2025-07-23-142942.png`

---

## Dokumentenmanagement.md

### Image Renames (4 total):
1. `01-dokumentenmanagement-geschaeftsobjekte.png` → `dokumentenmanagement_01_geschaeftsobjekte.png`
2. `02-bauwerksdokumentation-begriff.png` → `dokumentenmanagement_02_bauwerksdokumentation_begriff.png`
3. `03-bauwerksdokumentation-uebersicht.png` → `dokumentenmanagement_03_bauwerksdokumentation_uebersicht.png`
4. `04-sia-112-phasen.png` → `dokumentenmanagement_04_sia112_phasen.png`

### Unmatched/Flagged:
- `.mmd` Mermaid source file (not an image reference)

---

## Energie und Ressourcen.md

### Image Renames (7 total):
1. `BAFU CO2 Rechner - Scope 1 Berechnungsmethodik.PNG` → `energie-und-ressourcen_01_scope1-berechnungsmethodik.png`
2. `BAFU CO2 Rechner - Scope 1 Variablen.PNG` → `energie-und-ressourcen_02_scope1-variablen.png`
3. `BAFU CO2 Rechner - Scope 2 Berechnungsablauf.PNG` → `energie-und-ressourcen_03_scope2-berechnungsablauf.png`
4. `BAFU CO2 Rechner - Scope 2 Variablen.PNG` → `energie-und-ressourcen_04_scope2-variablen.png`
5. `BAFU CO2 Rechner - Scope 3 Berechnungsmethodik.PNG` → `energie-und-ressourcen_05_scope3-berechnungsmethodik.png`
6. `IBPDI - Energy and Ressources _ Mermaid Chart-2025-08-13-225152.png` → `energie-und-ressourcen_06_ibpdi-energy-resources-cluster.png`
7. `image-2025-8-13_20-35-5.png` → `energie-und-ressourcen_07_misc.png`

### Unmatched/Flagged:
- Images 02, 04, 07 were renamed but not referenced in .md (available for future use)

---

## Finanzen.md
- **No images** - text-only document

---

## Metadaten.md
- **No images** - text-only document with tables and external links

---

## Mietermanagement (Nutzungssicht).md
### ⚠️ FLAGGED - Missing Image:
- Line 142 references `assets/03-mietermanagement-geschaeftsobjekte.png` but this image does not exist
- No assets folder exists for this file
- **Action Required**: Image needs to be located/provided

---

## Organisatorische Daten (MDM).md
### ⚠️ FLAGGED - Missing Image:
- Line 157 references `assets/organisatorische-daten_konzeptuelles-datenmodell.png` (does not exist)
- TODO comment indicates image needs to be extracted from a PDF

---

## Portfoliomanagement.md
- **No images** - text-only document

---

## Projektmanagement.md

### Image Renames (3 total):
1. `image-2025-11-6_13-34-34.png` → `projektmanagement_01_sap_eppm_datenmodell.png`
2. `image-2025-11-6_13-34-34-1.png` → `projektmanagement_02_sap_eppm_detail.png`
3. `image-2025-11-6_13-34-34-2.png` → `projektmanagement_03_sap_eppm_overview.png`

### Notes:
- Updated TODO comment to actual image references
- Converted Anhang table text to proper markdown image syntax

---

## Studie - Fachliche Sicht IMMO (Arbeitsdokument).md
### ⚠️ FLAGGED - Missing Images (2):
- `assets/00-zielbild-it-architektur-immo.png` (Line 9) - does not exist
- `assets/00-domaenengruppen-immo.png` (Line 51) - does not exist
- **Action Required**: Images need to be extracted from source PDF

---

## Workspace Management.md
- **No images** - text-only document

---

# Summary

## Successfully Processed (44 images renamed):
- Analyse - Übersicht Standards IMMO.md: 30 images
- Architektonische Sicht.md: 3 images (7 unmatched)
- Dokumentenmanagement.md: 4 images
- Energie und Ressourcen.md: 7 images (4 not referenced in .md)
- Projektmanagement.md: 3 images

## Files Without Images (5):
- Finanzen.md
- Metadaten.md
- Portfoliomanagement.md
- Workspace Management.md

## Flagged for Manual Review (12 items total):
- **Architektonische Sicht.md**: 7 references point to non-existent images
- **Mietermanagement (Nutzungssicht).md**: 1 missing image
- **Organisatorische Daten (MDM).md**: 1 missing image (needs PDF extraction)
- **Studie - Fachliche Sicht IMMO (Arbeitsdokument).md**: 2 missing images (needs PDF extraction)

