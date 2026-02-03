# Detailstudie - Metadaten🟡

**Arbeitsdokument**

- Inhalte werden als PDFs im Anhang versioniert (nur Meilensteine)
- Zugang zum Dokument ist auf Mitarbeiter der Bundesverwaltung eingeschränkt (open by default)
- Inhalte können mit Abstimmung [Rasner David BBL](https://confluence.bbl.admin.ch/display/~U80865084) extern geteilt werden

**Inhalt:**

- [1. Ziel dieses Dokuments](#DetailstudieMetadaten🟡-1.ZieldiesesDokuments)
- [2. Metadatenmanagement – Aufgaben und Bedeutung](#DetailstudieMetadaten🟡-2.Metadatenmanagement–AufgabenundBedeutung)
- [3. Empfehlung Geschäftsobjekte (Konsolidiert)](#DetailstudieMetadaten🟡-3.EmpfehlungGeschäftsobjekte(Konsolidiert))
- [4. Übersicht der relevanten Standards für Metadatenmanagement (BBL-Fokus)](#DetailstudieMetadaten🟡-4.ÜbersichtderrelevantenStandardsfürMetadatenmanagement(BBL-Fokus))
- [5. Wichtigste Standards im Detail (Schrittweise Ergänzung)](#DetailstudieMetadaten🟡-5.WichtigsteStandardsimDetail(SchrittweiseErgänzung))
- [6. Verweise und Anhang](#DetailstudieMetadaten🟡-6.VerweiseundAnhang)

---

# 1. Ziel dieses Dokuments

Dieses Fachkonzept legt die Grundlagen für ein einheitliches Verständnis und die Modellierung von Daten im Bundesamt für Bauten und Logistik (BBL) fest. Es dient als verbindliches Referenzwerk, um sicherzustellen, dass alle Fachbereiche und IT-Systeme mit denselben Konzepten und Definitionen arbeiten können.

Die Kernziele dieses Dokuments sind:

1. **Definition zentraler Geschäftsobjekte:** Klare und konsistente Definition der domänenspezifischen Geschäftsobjekte und deren Attribute, unabhängig von spezifischen IT-Systemen.
2. **Standardkonformität:** Sicherstellung, dass die Datenmodellierung den anerkannten nationalen und internationalen Gesetzesvorgaben und Best-Practice-Standards folgt.
3. **Interoperabilität:** Schaffung einer Basis für den nahtlosen Austausch und die Integration von Daten über verschiedene Systeme und Prozesse hinweg.
4. **Langfristige Datenqualität:** Beitrag zur Sicherung der Qualität und Konsistenz der Daten, um die Abhängigkeit von einzelnen IT-Systemen zu reduzieren und eine langfristige Nutzbarkeit zu gewährleisten.
5. **Brücke zwischen Fach und IT:** Bereitstellung eines Referenzwerks, das als gemeinsame Sprache zwischen fachlichen Anforderungen und deren technischer Umsetzung dient.
6. **Fundament für strategische Entscheidungen:** Schaffung einer faktenbasierten Grundlage für strategische Entscheidungen, operative Steuerung und Compliance-Management.

# 2. Metadatenmanagement – Aufgaben und Bedeutung

## 2.1. Rolle im Immobilienmanagement

Die Metadatenmanagement-Domäne ist das zentrale Steuerungsinstrument für die Datenbewirtschaftung des BBL-Immobilienportfolios mit 2'600+ Bundesimmobilien. Sie gewährleistet die systematische Beschreibung, Auffindbarkeit und Qualitätssicherung aller Immobiliendaten und stellt die Einhaltung der bundesrechtlichen Vorgaben (EMBAG, GeoIG, DSG) sicher. Als Querschnittsfunktion verbindet sie alle operativen Bereiche (Planen, Bauen, Betreiben, Nutzen) und ermöglicht eine integrierte Informationssteuerung über den gesamten Immobilienlebenszyklus.

## 2.2. Inhaltliche Dimensionen

Das Metadatenmanagement in der Domäne umfasst fünf zentrale Dimensionen:

- **Deskriptive Metadaten (Fachlich):** Beschreibung von Datensätzen nach DCAT-AP CH (eCH-0200), Dublin Core für Dokumente, ISO 19115 für Geodaten und IFC-Metadaten für BIM-Modelle.
- **Strukturelle Metadaten (Technisch):** Datenmodelle und Schemata nach ISO 11179, Objekthierarchien nach ISO 12006, Klassifikationssysteme (GWR-Merkmalskatalog, eBKP-H) und semantische Beziehungen (RDF/SKOS).
- **Administrative Metadaten (Organisation):** Zugriffsrechte und Sicherheitsklassifikation (ISMS Bund), Versionierung und Change Management, Data Ownership und Stewardship sowie Lifecycle-Management nach ISO 15489.
- **Qualitäts-Metadaten:** Datenqualitätsdimensionen nach ISO 8000/ISO 25012, Vollständigkeits- und Genauigkeitsindikatoren, Aktualitätsstatus und Validierungsregeln sowie Conformance-Level zu Standards.
- **Operative Metadaten:** Prozessmetadaten nach eCH-0158 (BPMN), Provenienz und Lineage-Tracking, Verwendungshistorie und Zugriffsprotokolle sowie Integration- und Transformationsregeln.

## 2.3. Kernaufgaben

- **Metadatenkatalogisierung:** Aufbau und Pflege des BBL-Metadatenkatalogs, I14Y-Registrierung aller Datensätze und APIs, Publikation auf opendata.swiss und kontinuierliche Aktualisierung der Beschreibungen.
- **Standardisierung:** Definition einheitlicher Metadatenschemata, Harmonisierung über alle BBL-Systeme, Implementierung internationaler Standards und Sicherstellung semantischer Interoperabilität.
- **Qualitätsmanagement:** Systematische Metadatenqualitätsprüfung, Vollständigkeits- und Konsistenzvalidierung, Identifikation von Qualitätsproblemen und Implementierung von Verbesserungsmassnahmen.
- **Governance und Compliance:** Einhaltung aller relevanten Vorgaben (EMBAG, DSG, GeoIG, ISMS), Implementierung von Data-Governance-Prozessen, Management von Zugriffsrechten und Klassifikationen sowie Durchführung regelmässiger Audits.
- **Systemintegration:** Sicherstellung der Metadaten-Interoperabilität, Koordination mit I14Y als Leitsystem, Integration mit Fachapplikationen (BIM, CAFM, GIS, GEVER) und Standardisierung von Schnittstellen.

## 2.4. Strategische Bedeutung

Die Metadatenmanagement-Domäne ist essentiell für die Erreichung der BBL-Strategieziele 2025-2030. Sie ermöglicht die **evidenzbasierte Portfoliooptimierung** durch transparente Datenstrukturen und Auffindbarkeit, unterstützt die **digitale Transformation** durch standardisierte Metadatenmodelle und automatisierte Prozesse, gewährleistet die **regulatorische Compliance** durch lückenlose Dokumentation und Nachweisführung und sichert die **langfristige Informationsverfügbarkeit** über den gesamten Gebäudelebenszyklus.

Die Integration mit dem NaDB-Programm (Nationale Datenbewirtschaftung) und die Umsetzung des Once-Only-Prinzips reduzieren redundante Dateneingaben und erhöhen die Effizienz. Als Teil des SUPERB-Programms trägt die Metadatenmanagement-Domäne zur Modernisierung der gesamten BBL-IT-Landschaft bei und schafft die Grundlage für datengetriebene Entscheidungen im Immobilienmanagement des Bundes.

# 3. Empfehlung Geschäftsobjekte (Konsolidiert)

|  | Begriff | Name | Kategorie | Beschreibung | Relevanz BBL | Kommentar |
| --- | --- | --- | --- | --- | --- | --- |
| 1 |  |  |  |  |  |  |
| 2 |  |  |  |  |  |  |

Tabelle: Empfehlung Geschäftsobjekte (Konsolidiert)

# 4. Übersicht der relevanten Standards für Metadatenmanagement (BBL-Fokus)

### 4.1 Bewertungskriterien für «Relevanz für BBL»

- **Sehr hoch**: Rechtlich oder regulatorisch verpflichtend; grundlegende Voraussetzung für Kernprozesse und -systeme; verbindliche interne Vorgabe; oder unmittelbar umsetzbarer, priorisierter Use Case mit hohem Nutzen.
- **Hoch**: Branchenweit anerkannte Praxis in der Schweiz; wesentlich für Rechtssicherheit, Compliance oder Interoperabilität; wichtig für robuste Integration in bestehende Prozess- und Datenflüsse.
- **Mittel**: Ergänzend oder domänenspezifisch; nützlich für Spezialfälle, Pilotierungen oder als Referenz; optional ohne unmittelbaren Umsetzungsdruck.
- **Niedrig**: Informativ; geringe direkte Anwendbarkeit im Betrieb; Beobachten/Monitoring ausreichend.

### 4.2 Strategische Einordnung (Kategorie Standards)

Die Standards und Use Cases lassen sich in folgende strategische Kategorien einordnen:

- **Rechtliche Grundlagen**: Rechtlich bindende Vorgaben auf Bundes- oder Verordnungsebene; definieren Mindestanforderungen und Rahmenbedingungen.
- **BBL Weisungen und Prozesse**: Interne, verbindliche Standards und Prozessmodelle; legen organisatorische Zuständigkeiten, Abläufe und Qualitätsvorgaben fest.
- **BBL Fachanwendungen**: Operative IT-Systeme und Register für fachliche Leistungen und Verwaltungsaufgaben; stellen Funktionen und Schnittstellen für die Datenintegration bereit.
- **Technische Standards**: Normen und Integrationsstandards (z. B. Datenmodelle, Schnittstellen, Qualitäts- und Leistungskataloge), die Austauschformate und Qualitätsstufen definieren.
- **Externe Beispiele**: Verifizierte Praxisbeispiele und Best-Practice-Implementierungen als Referenz für erfolgreiche Umsetzungen und innovative Ansätze.

### 4.3. Übersicht als Tabelle

|  | Kategorie / Standards | Beschreibung (Kurz) | Relevanz für BBL | Kommentar |
| --- | --- | --- | --- | --- |
| 1 | **SCHWEIZER RECHTLICHE GRUNDLAGEN** |  |  |  |
| 2 | EMBAG | Bundesgesetz über elektronische Mittel | Sehr hoch - Gesetzliche Grundlage | Digital/Open by Default seit 2024 |
| 3 | Digitalisierungsverordnung (DigiV) | Ausführungsbestimmungen zum EMBAG | Sehr hoch - Verbindliche Vorgaben | Ersetzt EMBAV seit Mai 2025 |
| 4 | DSG | Datenschutzgesetz | Sehr hoch - Datenschutz | Metadaten für Verzeichnis der Bearbeitungstätigkeiten |
| 5 | ISG / ISMS |  |  |  |
| 6 | EDÖB |  |  |  |
| 7 | GeoIG/GeoIV | Geoinformationsgesetz und -verordnung | Hoch - Geodaten | Verpflichtende Geospatial-Metadaten |
| 8 | **BBL-GOVERNANCE** |  |  |  |
| 9 | KBOB Bauwerksdokumentation | Standards der Koordinationskonferenz | Hoch | Metadaten für Gebäudedokumentation |
| 10 | NaDB-Programm | Nationale Datenbewirtschaftung | Sehr hoch - Pflichtanbindung | I14Y-Registrierung bis 2026 |
| 11 | **SCHWEIZER STANDARDS** |  |  |  |
| 12 | I14Y Interoperabilitätsplattform | Nationales Metadatenverzeichnis | Sehr hoch | Zentrale Bundesinfrastruktur |
| 13 | eCH-0200 (DCAT-AP CH) | Schweizer DCAT-Profil | Sehr hoch - Metadatenformat | Standard für I14Y und opendata.swiss |
| 14 | eCH-0039 (GEVER) | Schnittstelle Dossiers/Dokumente | Sehr hoch - Records Management | Metadaten für Geschäftsverwaltung |
| 15 | eCH-0160 | Archivische Ablieferungsschnittstelle | Sehr hoch - Archivierung | OAIS-basierte Metadaten |
| 16 | eCH-0056 | Anwendungsprofil Geodienste | Sehr hoch - Geodienste | WMS/WFS-Metadaten |
| 17 | eCH-0158 | BPMN-Modellierungskonventionen | Hoch - Prozessmetadaten | Geschäftsprozess-Dokumentation |
| 18 | LINDAS | Linked Data Service | Mittel - Semantic Web | RDF-basierte Metadaten |
| 19 | TERMDAT | Terminologie-Datenbank | Mittel - Terminologie | Mehrsprachige Fachbegriffe |
| 20 | Geocat | Geometadatenkatalog | Hoch - Geodatenmetadaten | ISO 19115/19139 basiert |
| 21 | **INTERNATIONALE STANDARDS** |  |  |  |
| 22 | ISO 11179 Serie | Metadatenregistries | Sehr hoch - Grundstandard | Framework für Metadatenregister |
| 23 | ISO 8000-110 | Master Data Quality | Sehr hoch - Datenqualität | Stammdaten-Metadaten |
| 24 | ISO 15489-1 | Records Management | Sehr hoch - Dokumentation | Metadaten für Authentizität |
| 25 | ISO 23081 Serie | Records-Metadaten | Sehr hoch - Records | Prozess- und Kontextmetadaten |
| 26 | ISO/IEC 38505-1 | Data Governance | Hoch - Governance | Governance-Framework |
| 27 | **SEMANTIC WEB STANDARDS** |  |  |  |
| 28 | DCAT-AP | Data Catalogue Vocabulary | Hoch - EU-Interoperabilität | Basis für eCH-0200 |
| 29 | RDF/RDFS | Resource Description Framework | Hoch - Linked Data | Semantische Metadaten |
| 30 | SKOS | Simple Knowledge Organization | Hoch - Vokabulare | Taxonomien und Thesauri |
| 31 | Dublin Core | Metadata Element Set | Hoch - Basis-Metadaten | 15 Kernelemente |
| 32 | PREMIS | Preservation Metadata | Hoch - Langzeitarchivierung | Digitale Preservation |

# 5. Wichtigste Standards im Detail (Schrittweise Ergänzung)

*[Dieser Abschnitt wird schrittweise mit detaillierten Beschreibungen der wichtigsten Standards ergänzt]*

# 6. Verweise und Anhang

### 6.1 Verweise

- Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben (EMBAG), SR 172.019
- Datenschutzgesetz (DSG), SR 235.1
- Geoinformationsgesetz (GeoIG), SR 510.62
- I14Y-Plattform: <https://www.i14y.admin.ch>
- eCH-Standards: <https://www.ech.ch>
- ISO-Standards: <https://www.iso.org>
- buildingSMART: <https://www.buildingsmart.org>
- DAMA-DMBOK: <https://www.dama.org>
- KBOB-Publikationen: <https://www.kbob.admin.ch>

### 6.2 Anhang

*[Platzhalter für UML-Diagramme, Detailbeschreibungen und weitere Dokumentation]*