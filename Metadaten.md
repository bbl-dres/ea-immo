# Detailstudie - Metadaten

> **Arbeitsdokument**
>
> - Inhalte werden als PDFs im Anhang versioniert (nur Meilensteine)
> - Zugang zum Dokument ist auf Mitarbeiter der Bundesverwaltung eingeschrankt (open by default)
> - Inhalte konnen mit Abstimmung Rasner David BBL extern geteilt werden

---

## Inhalt

1. [Ziel dieses Dokuments](#1-ziel-dieses-dokuments)
2. [Metadatenmanagement - Aufgaben und Bedeutung](#2-metadatenmanagement--aufgaben-und-bedeutung)
   - 2.1 [Rolle im Immobilienmanagement](#21-rolle-im-immobilienmanagement)
   - 2.2 [Inhaltliche Dimensionen](#22-inhaltliche-dimensionen)
   - 2.3 [Kernaufgaben](#23-kernaufgaben)
   - 2.4 [Strategische Bedeutung](#24-strategische-bedeutung)
3. [Empfehlung Geschaftsobjekte (Konsolidiert)](#3-empfehlung-geschaftsobjekte-konsolidiert)
4. [Ubersicht der relevanten Standards fur Metadatenmanagement (BBL-Fokus)](#4-ubersicht-der-relevanten-standards-fur-metadatenmanagement-bbl-fokus)
   - 4.1 [Bewertungskriterien fur Relevanz fur BBL](#41-bewertungskriterien-fur-relevanz-fur-bbl)
   - 4.2 [Strategische Einordnung (Kategorie Standards)](#42-strategische-einordnung-kategorie-standards)
   - 4.3 [Ubersicht als Tabelle](#43-ubersicht-als-tabelle)
5. [Wichtigste Standards im Detail (Schrittweise Erganzung)](#5-wichtigste-standards-im-detail-schrittweise-erganzung)
6. [Verweise und Anhang](#6-verweise-und-anhang)
   - 6.1 [Verweise](#61-verweise)
   - 6.2 [Anhang](#62-anhang)

---

## 1. Ziel dieses Dokuments

Dieses Fachkonzept legt die Grundlagen fur ein einheitliches Verstandnis und die Modellierung von Daten im Bundesamt fur Bauten und Logistik (BBL) fest. Es dient als verbindliches Referenzwerk, um sicherzustellen, dass alle Fachbereiche und IT-Systeme mit denselben Konzepten und Definitionen arbeiten konnen.

Die Kernziele dieses Dokuments sind:

1. **Definition zentraler Geschaftsobjekte:** Klare und konsistente Definition der domanenspezifischen Geschaftsobjekte und deren Attribute, unabhangig von spezifischen IT-Systemen.

2. **Standardkonformitat:** Sicherstellung, dass die Datenmodellierung den anerkannten nationalen und internationalen Gesetzesvorgaben und Best-Practice-Standards folgt.

3. **Interoperabilitat:** Schaffung einer Basis fur den nahtlosen Austausch und die Integration von Daten uber verschiedene Systeme und Prozesse hinweg.

4. **Langfristige Datenqualitat:** Beitrag zur Sicherung der Qualitat und Konsistenz der Daten, um die Abhangigkeit von einzelnen IT-Systemen zu reduzieren und eine langfristige Nutzbarkeit zu gewahrleisten.

5. **Brucke zwischen Fach und IT:** Bereitstellung eines Referenzwerks, das als gemeinsame Sprache zwischen fachlichen Anforderungen und deren technischer Umsetzung dient.

6. **Fundament fur strategische Entscheidungen:** Schaffung einer faktenbasierten Grundlage fur strategische Entscheidungen, operative Steuerung und Compliance-Management.

---

## 2. Metadatenmanagement - Aufgaben und Bedeutung

### 2.1 Rolle im Immobilienmanagement

Die Metadatenmanagement-Domane ist das zentrale Steuerungsinstrument fur die Datenbewirtschaftung des BBL-Immobilienportfolios mit 2'600+ Bundesimmobilien. Sie gewahrleistet die systematische Beschreibung, Auffindbarkeit und Qualitatssicherung aller Immobiliendaten und stellt die Einhaltung der bundesrechtlichen Vorgaben (EMBAG, GeoIG, DSG) sicher. Als Querschnittsfunktion verbindet sie alle operativen Bereiche (Planen, Bauen, Betreiben, Nutzen) und ermoglicht eine integrierte Informationssteuerung uber den gesamten Immobilienlebenszyklus.

### 2.2 Inhaltliche Dimensionen

Das Metadatenmanagement in der Domane umfasst funf zentrale Dimensionen:

- **Deskriptive Metadaten (Fachlich):** Beschreibung von Datensatzen nach DCAT-AP CH (eCH-0200), Dublin Core fur Dokumente, ISO 19115 fur Geodaten und IFC-Metadaten fur BIM-Modelle.

- **Strukturelle Metadaten (Technisch):** Datenmodelle und Schemata nach ISO 11179, Objekthierarchien nach ISO 12006, Klassifikationssysteme (GWR-Merkmalskatalog, eBKP-H) und semantische Beziehungen (RDF/SKOS).

- **Administrative Metadaten (Organisation):** Zugriffsrechte und Sicherheitsklassifikation (ISMS Bund), Versionierung und Change Management, Data Ownership und Stewardship sowie Lifecycle-Management nach ISO 15489.

- **Qualitats-Metadaten:** Datenqualitatsdimensionen nach ISO 8000/ISO 25012, Vollstandigkeits- und Genauigkeitsindikatoren, Aktualitatsstatus und Validierungsregeln sowie Conformance-Level zu Standards.

- **Operative Metadaten:** Prozessmetadaten nach eCH-0158 (BPMN), Provenienz und Lineage-Tracking, Verwendungshistorie und Zugriffsprotokolle sowie Integration- und Transformationsregeln.

### 2.3 Kernaufgaben

- **Metadatenkatalogisierung:** Aufbau und Pflege des BBL-Metadatenkatalogs, I14Y-Registrierung aller Datensatze und APIs, Publikation auf opendata.swiss und kontinuierliche Aktualisierung der Beschreibungen.

- **Standardisierung:** Definition einheitlicher Metadatenschemata, Harmonisierung uber alle BBL-Systeme, Implementierung internationaler Standards und Sicherstellung semantischer Interoperabilitat.

- **Qualitatsmanagement:** Systematische Metadatenqualitatsprufung, Vollstandigkeits- und Konsistenzvalidierung, Identifikation von Qualitatsproblemen und Implementierung von Verbesserungsmassnahmen.

- **Governance und Compliance:** Einhaltung aller relevanten Vorgaben (EMBAG, DSG, GeoIG, ISMS), Implementierung von Data-Governance-Prozessen, Management von Zugriffsrechten und Klassifikationen sowie Durchfuhrung regelmassiger Audits.

- **Systemintegration:** Sicherstellung der Metadaten-Interoperabilitat, Koordination mit I14Y als Leitsystem, Integration mit Fachapplikationen (BIM, CAFM, GIS, GEVER) und Standardisierung von Schnittstellen.

### 2.4 Strategische Bedeutung

Die Metadatenmanagement-Domane ist essentiell fur die Erreichung der BBL-Strategieziele 2025-2030. Sie ermoglicht die **evidenzbasierte Portfoliooptimierung** durch transparente Datenstrukturen und Auffindbarkeit, unterstutzt die **digitale Transformation** durch standardisierte Metadatenmodelle und automatisierte Prozesse, gewahrleistet die **regulatorische Compliance** durch luckenlose Dokumentation und Nachweisfuhrung und sichert die **langfristige Informationsverfugbarkeit** uber den gesamten Gebaudelebenszyklus.

Die Integration mit dem NaDB-Programm (Nationale Datenbewirtschaftung) und die Umsetzung des Once-Only-Prinzips reduzieren redundante Dateneingaben und erhohen die Effizienz. Als Teil des SUPERB-Programms tragt die Metadatenmanagement-Domane zur Modernisierung der gesamten BBL-IT-Landschaft bei und schafft die Grundlage fur datengetriebene Entscheidungen im Immobilienmanagement des Bundes.

---

## 3. Empfehlung Geschaftsobjekte (Konsolidiert)

| # | Begriff | Name | Kategorie | Beschreibung | Relevanz BBL | Kommentar |
|---|---------|------|-----------|--------------|--------------|-----------|
| 1 | <!-- TODO --> | <!-- TODO --> | <!-- TODO --> | <!-- TODO --> | <!-- TODO --> | <!-- TODO --> |
| 2 | <!-- TODO --> | <!-- TODO --> | <!-- TODO --> | <!-- TODO --> | <!-- TODO --> | <!-- TODO --> |

*Tabelle: Empfehlung Geschaftsobjekte (Konsolidiert)*

<!-- TODO: Tabelle mit Geschaftsobjekten erganzen -->

---

## 4. Ubersicht der relevanten Standards fur Metadatenmanagement (BBL-Fokus)

### 4.1 Bewertungskriterien fur Relevanz fur BBL

- **Sehr hoch:** Rechtlich oder regulatorisch verpflichtend; grundlegende Voraussetzung fur Kernprozesse und -systeme; verbindliche interne Vorgabe; oder unmittelbar umsetzbarer, priorisierter Use Case mit hohem Nutzen.

- **Hoch:** Branchenweit anerkannte Praxis in der Schweiz; wesentlich fur Rechtssicherheit, Compliance oder Interoperabilitat; wichtig fur robuste Integration in bestehende Prozess- und Datenflusse.

- **Mittel:** Erganzend oder domanenspezifisch; nutzlich fur Spezialfalle, Pilotierungen oder als Referenz; optional ohne unmittelbaren Umsetzungsdruck.

- **Niedrig:** Informativ; geringe direkte Anwendbarkeit im Betrieb; Beobachten/Monitoring ausreichend.

### 4.2 Strategische Einordnung (Kategorie Standards)

Die Standards und Use Cases lassen sich in folgende strategische Kategorien einordnen:

- **Rechtliche Grundlagen:** Rechtlich bindende Vorgaben auf Bundes- oder Verordnungsebene; definieren Mindestanforderungen und Rahmenbedingungen.

- **BBL Weisungen und Prozesse:** Interne, verbindliche Standards und Prozessmodelle; legen organisatorische Zustandigkeiten, Ablaufe und Qualitatsvorgaben fest.

- **BBL Fachanwendungen:** Operative IT-Systeme und Register fur fachliche Leistungen und Verwaltungsaufgaben; stellen Funktionen und Schnittstellen fur die Datenintegration bereit.

- **Technische Standards:** Normen und Integrationsstandards (z. B. Datenmodelle, Schnittstellen, Qualitats- und Leistungskataloge), die Austauschformate und Qualitatsstufen definieren.

- **Externe Beispiele:** Verifizierte Praxisbeispiele und Best-Practice-Implementierungen als Referenz fur erfolgreiche Umsetzungen und innovative Ansatze.

### 4.3 Ubersicht als Tabelle

| # | Kategorie / Standards | Beschreibung (Kurz) | Relevanz fur BBL | Kommentar |
|---|----------------------|---------------------|------------------|-----------|
| 1 | **SCHWEIZER RECHTLICHE GRUNDLAGEN** | | | |
| 2 | EMBAG | Bundesgesetz uber elektronische Mittel | Sehr hoch - Gesetzliche Grundlage | Digital/Open by Default seit 2024 |
| 3 | Digitalisierungsverordnung (DigiV) | Ausfuhrungsbestimmungen zum EMBAG | Sehr hoch - Verbindliche Vorgaben | Ersetzt EMBAV seit Mai 2025 |
| 4 | DSG | Datenschutzgesetz | Sehr hoch - Datenschutz | Metadaten fur Verzeichnis der Bearbeitungstatigkeiten |
| 5 | ISG / ISMS | <!-- TODO --> | <!-- TODO --> | <!-- TODO --> |
| 6 | EDOB | <!-- TODO --> | <!-- TODO --> | <!-- TODO --> |
| 7 | GeoIG/GeoIV | Geoinformationsgesetz und -verordnung | Hoch - Geodaten | Verpflichtende Geospatial-Metadaten |
| 8 | **BBL-GOVERNANCE** | | | |
| 9 | KBOB Bauwerksdokumentation | Standards der Koordinationskonferenz | Hoch | Metadaten fur Gebaudedokumentation |
| 10 | NaDB-Programm | Nationale Datenbewirtschaftung | Sehr hoch - Pflichtanbindung | I14Y-Registrierung bis 2026 |
| 11 | **SCHWEIZER STANDARDS** | | | |
| 12 | I14Y Interoperabilitatsplattform | Nationales Metadatenverzeichnis | Sehr hoch | Zentrale Bundesinfrastruktur |
| 13 | eCH-0200 (DCAT-AP CH) | Schweizer DCAT-Profil | Sehr hoch - Metadatenformat | Standard fur I14Y und opendata.swiss |
| 14 | eCH-0039 (GEVER) | Schnittstelle Dossiers/Dokumente | Sehr hoch - Records Management | Metadaten fur Geschaftsverwaltung |
| 15 | eCH-0160 | Archivische Ablieferungsschnittstelle | Sehr hoch - Archivierung | OAIS-basierte Metadaten |
| 16 | eCH-0056 | Anwendungsprofil Geodienste | Sehr hoch - Geodienste | WMS/WFS-Metadaten |
| 17 | eCH-0158 | BPMN-Modellierungskonventionen | Hoch - Prozessmetadaten | Geschaftsprozess-Dokumentation |
| 18 | LINDAS | Linked Data Service | Mittel - Semantic Web | RDF-basierte Metadaten |
| 19 | TERMDAT | Terminologie-Datenbank | Mittel - Terminologie | Mehrsprachige Fachbegriffe |
| 20 | Geocat | Geometadatenkatalog | Hoch - Geodatenmetadaten | ISO 19115/19139 basiert |
| 21 | **INTERNATIONALE STANDARDS** | | | |
| 22 | ISO 11179 Serie | Metadatenregistries | Sehr hoch - Grundstandard | Framework fur Metadatenregister |
| 23 | ISO 8000-110 | Master Data Quality | Sehr hoch - Datenqualitat | Stammdaten-Metadaten |
| 24 | ISO 15489-1 | Records Management | Sehr hoch - Dokumentation | Metadaten fur Authentizitat |
| 25 | ISO 23081 Serie | Records-Metadaten | Sehr hoch - Records | Prozess- und Kontextmetadaten |
| 26 | ISO/IEC 38505-1 | Data Governance | Hoch - Governance | Governance-Framework |
| 27 | **SEMANTIC WEB STANDARDS** | | | |
| 28 | DCAT-AP | Data Catalogue Vocabulary | Hoch - EU-Interoperabilitat | Basis fur eCH-0200 |
| 29 | RDF/RDFS | Resource Description Framework | Hoch - Linked Data | Semantische Metadaten |
| 30 | SKOS | Simple Knowledge Organization | Hoch - Vokabulare | Taxonomien und Thesauri |
| 31 | Dublin Core | Metadata Element Set | Hoch - Basis-Metadaten | 15 Kernelemente |
| 32 | PREMIS | Preservation Metadata | Hoch - Langzeitarchivierung | Digitale Preservation |

---

## 5. Wichtigste Standards im Detail (Schrittweise Erganzung)

<!-- TODO: Dieser Abschnitt wird schrittweise mit detaillierten Beschreibungen der wichtigsten Standards erganzt -->

---

## 6. Verweise und Anhang

### 6.1 Verweise

- Bundesgesetz uber den Einsatz elektronischer Mittel zur Erfullung von Behordenaufgaben (EMBAG), SR 172.019
- Datenschutzgesetz (DSG), SR 235.1
- Geoinformationsgesetz (GeoIG), SR 510.62
- I14Y-Plattform: [https://www.i14y.admin.ch](https://www.i14y.admin.ch)
- eCH-Standards: [https://www.ech.ch](https://www.ech.ch)
- ISO-Standards: [https://www.iso.org](https://www.iso.org)
- buildingSMART: [https://www.buildingsmart.org](https://www.buildingsmart.org)
- DAMA-DMBOK: [https://www.dama.org](https://www.dama.org)
- KBOB-Publikationen: [https://www.kbob.admin.ch](https://www.kbob.admin.ch)

### 6.2 Anhang

<!-- TODO: Platzhalter fur UML-Diagramme, Detailbeschreibungen und weitere Dokumentation -->
