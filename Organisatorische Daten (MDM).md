# Detailstudie - Organisatorische Daten (MDM)

> **Arbeitsdokument**
> - Inhalte werden als PDFs im Anhang versioniert (nur Meilensteine)
> - Zugang zum Dokument ist auf Mitarbeiter der Bundesverwaltung eingeschrankt (open by default)
> - Inhalte koennen mit Abstimmung Rasner David BBL extern geteilt werden

---

## Inhalt

1. [Ziel dieses Dokuments](#1-ziel-dieses-dokuments)
2. [Organisatorische Daten - Aufgaben und Bedeutung](#2-organisatorische-daten--aufgaben-und-bedeutung)
   - 2.1. [Rolle im Immobilienmanagement](#21-rolle-im-immobilienmanagement)
   - 2.2. [Inhaltliche Dimensionen](#22-inhaltliche-dimensionen)
   - 2.3. [Kernaufgaben](#23-kernaufgaben)
   - 2.4. [Strategische Bedeutung](#24-strategische-bedeutung)
3. [Empfehlung Geschaeftsobjekte (Konsolidiert)](#3-empfehlung-geschaeftsobjekte-konsolidiert)
4. [Uebersicht der relevanten Standards](#4-uebersicht-der-relevanten-standards)
   - 4.1. [Bewertungskriterien fuer Relevanz fuer BBL](#41-bewertungskriterien-fuer-relevanz-fuer-bbl)
   - 4.2. [Strategische Einordnung (Kategorie Standards)](#42-strategische-einordnung-kategorie-standards)
   - 4.3. [Uebersicht als Tabelle](#43-uebersicht-als-tabelle)
5. [Wichtigste Standards im Detail (schrittweise Ergaenzung)](#5-wichtigste-standards-im-detail-schrittweise-ergaenzung)
   - 5.X. [Beispiel Standard](#5x-beispiel-standard)
   - 5.1. [Bundesgesetz ueber die Unternehmens-Identifikationsnummer (UIDG), SR 431.03](#51-bundesgesetz-ueber-die-unternehmens-identifikationsnummer-uidg-sr-43103)
   - 5.2. [Verordnung ueber die Unternehmens-Identifikationsnummer (UIDV), SR 431.031](#52-verordnung-ueber-die-unternehmens-identifikationsnummer-uidv-sr-431031)
   - 5.3. [eCH-0108 - Datenstandard: Unternehmensstammdaten und Unternehmensregister](#53-ech-0108--datenstandard-unternehmensstammdaten-und-unternehmensregister)
   - 5.4. [IBPDI Common Data Model (Organizational Management Cluster)](#54-ibpdi-common-data-model-organizational-management-cluster)
6. [Verweise und Anhang](#6-verweise-und-anhang)

---

## 1. Ziel dieses Dokuments

Dieses Fachkonzept legt die Grundlagen fuer ein einheitliches Verstaendnis und die Modellierung von Daten im Bundesamt fuer Bauten und Logistik (BBL) fest. Es dient als verbindliches Referenzwerk, um sicherzustellen, dass alle Fachbereiche und IT-Systeme mit denselben Konzepten und Definitionen arbeiten koennen.

**Die Kernziele dieses Dokuments sind:**

1. **Definition zentraler Geschaeftsobjekte:** Klare und konsistente Definition der domaenenspezifischen Geschaeftsobjekte und deren Attribute, unabhaengig von spezifischen IT-Systemen.
2. **Standardkonformitaet:** Sicherstellung, dass die Datenmodellierung den anerkannten nationalen und internationalen Gesetzesvorgaben und Best-Practice-Standards folgt.
3. **Interoperabilitaet:** Schaffung einer Basis fuer den nahtlosen Austausch und die Integration von Daten ueber verschiedene Systeme und Prozesse hinweg.
4. **Langfristige Datenqualitaet:** Beitrag zur Sicherung der Qualitaet und Konsistenz der Daten, um die Abhaengigkeit von einzelnen IT-Systemen zu reduzieren und eine langfristige Nutzbarkeit zu gewaehrleisten.
5. **Bruecke zwischen Fach und IT:** Bereitstellung eines Referenzwerks, das als gemeinsame Sprache zwischen fachlichen Anforderungen und deren technischer Umsetzung dient.
6. **Fundament fuer strategische Entscheidungen:** Schaffung einer faktenbasierten Grundlage fuer strategische Entscheidungen, operative Steuerung und Compliance-Management.

---

## 2. Organisatorische Daten - Aufgaben und Bedeutung

### 2.1. Rolle im Immobilienmanagement

Die Domaene "Organisatorische Daten" bildet die Grundlage fuer das Stakeholder- und Beziehungsmanagement im Immobilienportfolio des BBL. Sie umfasst alle Akteure, die im Lebenszyklus von Immobilien eine Rolle spielen, und ermoeglicht die strukturierte Verwaltung von Geschaeftsbeziehungen, Verantwortlichkeiten und Kontaktinformationen.

Mit einem Portfolio von 2'600 bis 3'000 heterogenen Bundesimmobilien verwaltet das BBL ein komplexes Multi-Stakeholder-Oekosystem:

- **Interne Stakeholder:** Bundesaemter als Nutzer, Fachbereiche des BBL (Projektleitung, Facility Management, Vermietung)
- **Externe Stakeholder:** Mieter, Generalunternehmer, Architekten, Planer, Facility-Management-Dienstleister, Wartungsfirmen, Energieversorger
- **Behoerden und Aufsicht:** Baubehoerden, Denkmalpflege, Brandschutz, OEREB-Kataster
- **Strategische Partner:** KBOB (Koordinationskonferenz der Bau- und Liegenschaftsorgane), Armasuisse, weitere Bundesstellen

Die organisatorischen Daten sind eng verzahnt mit anderen Domaenen:

- **Architektonische Sicht:** Zuordnung von Verantwortlichen zu Gebaeuden, Geschossen, Raeumen
- **Mietermanagement:** Verwaltung von Mietverhaeltnissen und Mieterkontakten
- **Projektmanagement:** Projektbeteiligte, Planungs- und Ausfuehrungsverantwortliche
- **Energie- und Ressourcenmanagement:** Betreiberverantwortung, Wartungsvertraege
- **Dokumentenmanagement:** Dokumentenverantwortung, Freigabeprozesse

### 2.2. Inhaltliche Dimensionen

Die Domaene "Organisatorische Daten" umfasst vier zentrale Dimensionen:

- **Akteure und Organisationen:**
  - Natuerliche Personen (Ansprechpartner, Fachverantwortliche)
  - Juristische Personen (Unternehmen, Behoerden, Vereine)
  - Organisationseinheiten (Abteilungen, Teams, Projektgruppen)
  - Rollen und Verantwortlichkeiten (Bauherr, Architekt, FM-Verantwortlicher, Mieter)

- **Kontakt- und Adressinformationen:**
  - Postanschriften (gemaess eCH-0010, GWR-validiert)
  - Kommunikationskanaele (Telefon, E-Mail, elektronische Services)
  - Geografische Koordinaten fuer raeumliche Zuordnung
  - Mehrfachadressen und Adresshistorie

- **Beziehungen und Zuordnungen:**
  - Hierarchische Strukturen (Konzernstrukturen, Organisationshierarchien)
  - Projektbezogene Beziehungen (Projektteams, Planerkonsortien)
  - Immobilienbezogene Zuordnungen (Eigentuemer, Bewirtschafter, Nutzer)
  - Vertragliche Beziehungen (Mietvertraege, Dienstleistungsvertraege, Werkvertraege)

- **Compliance und Governance:**
  - Datenschutzkonformitaet (revDSG, DSGVO)
  - Geschaeftspartnerpruefung und Due Diligence
  - Aufbewahrungsfristen (10 Jahre gemaess Bundesverwaltung)
  - Archivierungspflichten (Bundesarchiv BAR)

### 2.3. Kernaufgaben

1. **Stammdatenverwaltung:** Zentrale, qualitaetsgesicherte Verwaltung aller Geschaeftspartner, Kontakte und Adressen mit eindeutigen Identifikatoren (UID, AHV-Nr gemaess gesetzlichen Vorgaben).

2. **Rollenmanagement:** Definition und Verwaltung von Rollen und Verantwortlichkeiten ueber den gesamten Immobilienlebenszyklus, von der Planung bis zum Betrieb.

3. **Beziehungsmanagement:** Strukturierte Erfassung und Pflege von Beziehungen zwischen Akteuren und deren Zuordnung zu Immobilien, Projekten und Vertraegen.

4. **Datenschutz und Compliance:** Sicherstellung der Einhaltung aller rechtlichen Vorgaben bei der Verarbeitung personenbezogener Daten, inklusive Loeschfristen und Auskunftsrechten.

5. **Adressmanagement:** Verwaltung standardisierter, GWR-validierter Adressen fuer sichere Kommunikation und korrekte Zustellung.

6. **Integration und Synchronisation:** Anbindung an autoritative Datenquellen (UID-Register, ZefiX, lokale Verzeichnisse) und Synchronisation mit Fachsystemen (SAP, CRM, GEVER).

7. **Historisierung und Audit:** Nachvollziehbare Dokumentation aller Aenderungen an organisatorischen Daten fuer Compliance und Rechtssicherheit.

### 2.4. Strategische Bedeutung

Die Domaene "Organisatorische Daten" ist von strategischer Bedeutung fuer das BBL:

- **Rechtssicherheit und Compliance:** Die korrekte Erfassung und Verwaltung von Geschaeftspartnern ist essentiell fuer die Einhaltung des revidierten Datenschutzgesetzes (revDSG, in Kraft seit 1. September 2023), das fuer Bundesstellen verpflichtend ist. Dies umfasst die Ernennung von Datenschutzbeauftragten, Meldepflichten bei Datenschutzverletzungen an den EDOEB (Eidgenoessischer Datenschutz- und Oeffentlichkeitsbeauftragter) sowie die Fuehrung von Verarbeitungsverzeichnissen.

- **Transparenz und Beschaffung:** Die oeffentliche Ausschreibungspflicht via [simap.ch](http://simap.ch) erfordert strukturierte Erfassung von Bietern und Auftragnehmern fuer Transparenz und Nachvollziehbarkeit im Beschaffungswesen.

- **Informationsmanagement:** Integration mit GEVER (Geschaeftsverwaltungssysteme) als obligatorisches Aktenfuehrungssystem fuer die Bundesverwaltung zur Sicherstellung der 10-jaehrigen Aufbewahrungspflicht von Geschaeftsunterlagen und der Ablieferungspflicht an das Bundesarchiv (BAR) fuer Dokumente mit bleibendem rechtlichem oder administrativem Wert.

- **Digitalisierung und BIM:** Als Teil der Digital-Twin-Strategie des BBL ermoeglichen standardisierte organisatorische Daten die nahtlose Integration von Planungs-, Bau- und Betriebsdaten (ISO 19650) und die Umsetzung von Common Data Environments (CDE).

- **Effizienz und Kostenkontrolle:** Zentrale, qualitaetsgesicherte Stammdaten reduzieren Doppelerfassungen, verbessern die Datenqualitaet und ermoeglichen effizienteres Stakeholder-Management ueber alle 2'600+ Bundesimmobilien hinweg.

- **Zusammenarbeit und Standards:** Als Mitglied der KBOB (Koordinationskonferenz der Bau- und Liegenschaftsorgane des Bundes) traegt das BBL zur Standardisierung und Harmonisierung im Schweizer Bundesbau bei und profitiert von gemeinsamen Best Practices.

---

## 3. Empfehlung Geschaeftsobjekte (Konsolidiert)

### Bedeutung der Prioritaetsstufen

- **Muss:** Geschaeftsobjekte, die fuer die fachliche Vollstaendigkeit der Architektonischen Sicht zwingend erforderlich sind. Diese Objekte bilden das Kerngeruest des Datenmodells und sind fuer die grundlegenden Geschaeftsprozesse im Immobilienmanagement unabdingbar.
- **Sollte:** Geschaeftsobjekte, die das fachliche Datenmodell um wichtige Aspekte erweitern und die praktische Anwendbarkeit erheblich steigern. Sie sind nicht kritisch fuer die Grundfunktionalitaet, aber wichtig fuer eine vollstaendige fachliche Abbildung der Immobilienwelt.
- **Koennte:** Geschaeftsobjekte, die zusaetzlichen fachlichen Mehrwert bieten und erweiterte Anwendungsfaelle ermoeglichen. Sie erweitern das Datenmodell um spezialisierte Bereiche, sind aber nicht fuer die Kerngeschaeftsprozesse erforderlich.
- **Wird nicht:** Geschaeftsobjekte, die bewusst nicht in der Architektonischen Sicht modelliert werden, entweder weil sie durch andere Objekte fachlich abgedeckt sind oder weil sie fachlich in anderen Domaenen zugeordnet sind.

### Uebersicht Geschaeftsobjekte

| # | Gruppe / Geschaeftsobjekt | Prioritaet | Beschreibung | Primaere Identifikatoren | Relevante Standards | Kommentar |
|---|---------------------------|------------|--------------|--------------------------|---------------------|-----------|
| 1 | **Akteur** | | | | | |
| 2 | Organisation | Muss | Juristische Personen und Organisationseinheiten (Mieter, Dienstleister, Behoerden, Bundesstellen) | UID (CHE-xxx.xxx.xxx), HR-Nummer | UIDG/V, eCH-0108, eCH-0098, IBPDI CDM | Gesetzlich verpflichtend gemaess UIDG |
| 3 | Person | Muss | Natuerliche Personen als Ansprechpartner, Einzelunternehmer oder Verantwortliche | AHV-Nr. (wo zulaessig), interne ID | eCH-0044, eCH-0011, revDSG | Datenschutzkonform gemaess revDSG |
| 4 | Kontakt | Soll | Kommunikationskanaele (Telefon, E-Mail, elektronische Services) | - | eCH-0046, IBPDI CDM | Best Practice fuer strukturierte Kommunikation |
| 5 | Rolle | Muss | Definition von Verantwortlichkeiten (Eigentuemer, Mieter, FM-Verantwortlicher, Projektleiter) | Rollen-ID, Rollentyp-Code | IBPDI CDM, OR Art. 253ff | Rechtlich erforderlich fuer Vertraege |
| 6 | **Verortung** | | | | | |
| 7 | Adresse | Muss | Lokalisierungs- und Korrespondenzadressen | EGAID, EGID, EDID | eCH-0010, GWR, VGWR | GWR-Pflicht fuer Bundesgebaeude |
| 8 | Geokoordinate | Soll | Geografische Koordinaten fuer raeumliche Verortung | LV95 (E/N), WGS84 (lat/lon) | GeoIG, GeoIV, swisstopo | Best Practice fuer GIS-Integration |

*Tabelle: Empfehlung Geschaeftsobjekte (Konsolidiert)*

### Diagramm Geschaeftsobjekte

![Organisatorische Daten - Konzeptuelles Datenmodell BBL](assets/organisatorische-daten_konzeptuelles-datenmodell.png)

*Bild: Empfehlung Geschaeftsobjekte (Konsolidiert). Quelle: BBL*

<!-- TODO: Bild aus PDF extrahieren und unter assets/organisatorische-daten_konzeptuelles-datenmodell.png speichern -->

---

## 4. Uebersicht der relevanten Standards

### 4.1 Bewertungskriterien fuer Relevanz fuer BBL

- **Sehr hoch:** Rechtlich oder regulatorisch verpflichtend; grundlegende Voraussetzung fuer Kernprozesse und -systeme; verbindliche interne Vorgabe; oder unmittelbar umsetzbarer, priorisierter Use Case mit hohem Nutzen.
- **Hoch:** Branchenweit anerkannte Praxis in der Schweiz; wesentlich fuer Rechtssicherheit, Compliance oder Interoperabilitaet; wichtig fuer robuste Integration in bestehende Prozess- und Datenfluesse.
- **Mittel:** Ergaenzend oder domaenenspezifisch; nuetzlich fuer Spezialfaelle, Pilotierungen oder als Referenz; optional ohne unmittelbaren Umsetzungsdruck.
- **Niedrig:** Informativ; geringe direkte Anwendbarkeit im Betrieb; Beobachten/Monitoring ausreichend.

### 4.2 Strategische Einordnung (Kategorie Standards)

Die Standards und Use Cases lassen sich in folgende strategische Kategorien einordnen:

- **Rechtliche Grundlagen:** Rechtlich bindende Vorgaben auf Bundes- oder Verordnungsebene; definieren Mindestanforderungen und Rahmenbedingungen.
- **BBL Weisungen und Prozesse:** Interne, verbindliche Standards und Prozessmodelle; legen organisatorische Zustaendigkeiten, Ablaeufe und Qualitaetsvorgaben fest.
- **BBL Fachanwendungen:** Operative IT-Systeme und Register fuer fachliche Leistungen und Verwaltungsaufgaben; stellen Funktionen und Schnittstellen fuer die Datenintegration bereit.
- **Technische Standards:** Normen und Integrationsstandards (z.B. Datenmodelle, Schnittstellen, Qualitaets- und Leistungskataloge), die Austauschformate und Qualitaetsstufen definieren.
- **Externe Beispiele:** Verifizierte Praxisbeispiele und Best-Practice-Implementierungen als Referenz fuer erfolgreiche Umsetzungen und innovative Ansaetze.

### 4.3 Uebersicht als Tabelle

| # | Kategorie / Name des Standards | Zweck (Kurz) | Relevanz fuer BBL | Anwendung BBL | Schnittstellen | Status |
|---|-------------------------------|--------------|-------------------|---------------|----------------|--------|
| 1 | **Rechtliche Grundlagen** | | | | | |
| 2 | Bundesgesetz ueber den Datenschutz (revDSG), SR 235.1 | Schutz personenbezogener Daten natuerlicher Personen | Sehr hoch - Rechtlich zwingend fuer Bundesstellen | Verpflichtende Umsetzung fuer alle personenbezogenen Daten, Datenschutzbeauftragte, Meldepflichten bei Datenschutzverletzungen | Alle Systeme mit Personendaten | Aktiv (seit 1.9.2023) |
| 3 | Verordnung zum Bundesgesetz ueber den Datenschutz (VDSG), SR 235.11 | Konkretisierung des Datenschutzgesetzes | Sehr hoch - Verfahrensvorschrift | Technische und organisatorische Massnahmen, Datensicherheit, Auftragsdatenbearbeitung | GEVER, HR-Systeme, CRM | Aktiv |
| 4 | Obligationenrecht (OR), Art. 253-274g | Schweizerisches Vertragsrecht inkl. Mietrecht | Sehr hoch - Rechtsgrundlage Mietverhaeltnisse | Basis fuer Miet-, Kauf- und Dienstleistungsvertraege im Immobilienbereich | Mietermanagement-Systeme, Handelsregister | Aktiv |
| 5 | Bundesgesetz ueber das oeffentliche Beschaffungswesen (BoeB), SR 172.056.1 | Regelung oeffentlicher Beschaffungen | Sehr hoch - Transparenzpflicht | Strukturierte Erfassung von Bietern, Dokumentation via simap.ch | Beschaffungsplattformen, GEVER | Aktiv |
| 6 | Bundesgesetz ueber die Archivierung (BGA), SR 152.1 | Archivierung von Bundesunterlagen | Sehr hoch - Aufbewahrungspflicht | 10-jaehrige Aufbewahrung, Ablieferung ans Bundesarchiv (BAR) | GEVER, Dokumentenmanagementsysteme | Aktiv |
| 7 | Bundesgesetz ueber die Unternehmens-Identifikationsnummer (UIDG), SR 431.03 | Einfuehrung einer einheitlichen UID fuer Unternehmen | Hoch - Foerdert Effizienz und Datenqualitaet | Verwendung der UID fuer Identifikation von Geschaeftspartnern | Austausch mit UID-Register (BFS) | Aktiv (seit 2011) |
| 8 | Verordnung ueber die Unternehmens-Identifikationsnummer (UIDV), SR 431.031 | Ausfuehrungsbestimmungen zum UIDG | Hoch - Operative Umsetzung | Technische Spezifikation, Datenintegration, Meldepflichten | UID-Register, SAP, GEVER | Aktiv |
| 9 | Verordnung ueber das eidgenoessische Gebaeude- und Wohnungsregister (VGWR), SR 431.841 | Fuehrung des GWR mit EGID, EDID, EWID | Sehr hoch - Zentrale Gebaeudeidentifikation | Registrierung aller zivilen Bundesgebaeude, eindeutige Identifikatoren | GWR, alle Immobiliensysteme | Aktiv (seit 2017) |
| 10 | Bundesgesetz ueber Geoinformation (GeoIG), SR 510.62 | Rechtlicher Rahmen fuer Geodaten | Sehr hoch - Basis fuer Geodienste | Definition geodaetischer Bezugssysteme, Metadatenstandards, OEREB-Kataster | Geodienste, GIS-Systeme | Aktiv |
| 11 | Verordnung ueber Geoinformation (GeoIV), SR 510.620 | Umsetzung GeoIG mit Katalog Geobasisdaten | Sehr hoch - Operative Geodatenvorschrift | Anhang 1: Katalog Geobasisdaten, Datenklassifizierung, Zugangsrechte | Geodateninfrastruktur, swisstopo | Aktiv |
| 12 | Verordnung ueber die geografischen Namen (GeoNV), SR 510.625 | Standardisierung geografischer Namen und Adressen | Hoch - Adressstandards | Art. 26a/b: Adressstandards fuer GWR-validierte Adressen | GWR, Adresssysteme | Aktiv |
| 13 | **BBL Governance und Weisungen** | | | | | |
| 14 | GEVER-Vorgaben Bundesverwaltung | Obligatorisches Geschaeftsverwaltungssystem | Sehr hoch - Bundespflicht | Strukturierte Aktenfuehrung, Dossiermanagement, Geschaeftspartner-Dokumentation | Alle Fachapplikationen | Aktiv |
| 15 | **BBL Fachanwendungen** | | | | | |
| 16 | SAP RE-FX (Real Estate Flexible) | Zentrales System fuer Mietvertrags- und Flaechenmanagement | Sehr hoch - Kernsystem BBL | Verwaltung aller Mietvertraege, Mieter-Stammdaten, Flaechenabrechnung | SAP FI/CO, Bundesfinanzsystem | Aktiv |
| 17 | SAP MDG (Master Data Governance) | Zentrale Stammdatenverwaltung | Sehr hoch - Stammdatenqualitaet | Geschaeftspartner-Stammdaten, Organisationen, Kontakte, Adressen | SAP RE-FX, CRM, ERP-Module | Aktiv |
| 18 | SAP CRM (Customer Relationship Management) | Stakeholder- und Beziehungsmanagement | Hoch - Mieterkommunikation | Kontakthistorie, Anfragen, Beschwerden, Serviceprozesse | SAP RE-FX, MDG, Service-Portal | Aktiv |
| 19 | **Technische Standards - eCH** | | | | | |
| 20 | eCH-0108: Datenstandard Unternehmensregister | UID-Register-Austauschformat | Sehr hoch - Autoritativer Standard | Eindeutige Identifikation juristischer Personen | UID-Register (BFS), ZefiX, SAP | Aktiv (V6.0) |
| 21 | eCH-0097: Datenstandard Unternehmensidentifikation | Standard fuer eindeutigen Unternehmensidentifikator (UID) | Sehr hoch - Nationales System | Speicherung der UID zu jeder Organisation | Automatisierter Abgleich mit UID-Register | Aktiv (V5.2.0) |
| 22 | eCH-0098: Datenstandard Unternehmensdaten | Austauschformat fuer Organisationsdaten | Sehr hoch - E-Gov Grundlage | Behoerdenkommunikation, Anlage/Aktualisierung Organisations-Stammdaten | Alle eCH-kompatiblen Systeme | Aktiv (V5.1) |
| 23 | eCH-0010: Postadresse | Standardisierte schweizerische Postadresse | Sehr hoch - GWR-Validierung | Adressverwaltung fuer Objekte und Organisationen | GWR, Postdienste, Behoerden | Aktiv (V8.0.0) |
| 24 | eCH-0046: Kontakt | Standardisierter Austausch von Kontaktdaten | Sehr hoch - E-Gov Standard | Telefon, E-Mail, elektronische Kontaktkanaele | CRM, Verzeichnisdienste | Aktiv |
| 25 | eCH-0044: Personenidentifikation | Identifikation natuerlicher Personen (AHV-Nr) | Sehr hoch - Datenschutzkonform | Eindeutige Personenidentifikation wo rechtlich zulaessig | HR-Systeme, IAM, Einwohnerregister | Aktiv |
| 26 | eCH-0011: Personendaten | Standard fuer Austausch von Personendaten | Hoch - Datenstandard Behoerdenumfeld | Referenz fuer Strukturierung Personendaten (z.B. Mieterdaten) | Einwohnerregister, Behoerden-Schnittstellen | Aktiv (V9.0.0) |
| 27 | eCH-0129: Objektwesen | Umfassendes Austauschdatenmodell Immobilien | Sehr hoch - Basis Objektwesen | Definiert Entitaeten und Meldeprozesse fuer Immobiliendaten | Alle domaenenspezifischen Standards | Aktiv (V6.0.0) |
| 28 | **Technische Standards - International** | | | | | |
| 29 | IBPDI Common Data Model (Organizational Management Cluster) | Globaler Immobiliendatenstandard mit Organisationsmodul | Hoch - Digital Twin Potenzial | Strukturierung Business Partner, Mieter, Stakeholder-Beziehungen | Digital Twin Plattformen, Azure DT | Aktiv |
| 30 | Real Estate Core (REC): Agent/Organization | Semantische Ontologie fuer Smart Buildings | Hoch - Digital Twin, IoT-Integration | Akteure, Organisationen, Rollen in semantischem Modell | Knowledge Graphs, IoT-Plattformen | Aktiv |
| 31 | RICS Professional Standards: Property Agency | Best Practices Immobilienagentur-Dienste | Hoch - Internationale Best Practice | Stakeholder-Management, Vermietungsprozesse | FM-Systeme, Vermietungstools | Referenz |
| 32 | RICS Service Charge Code | Transparenz bei Nebenkosten | Hoch - Mieter-Transparenz | Nebenkostenabrechnung, Betriebskosten-Management | Abrechnungssysteme, SAP | Referenz |
| 33 | GEFMA-Richtlinien | DACH-harmonisierte FM-Standards | Mittel - Ergaenzung zu SIA/KBOB | FM-Prozesse, Dienstleistersteuerung | FM-Systeme, CAFM | Referenz |
| 34 | Building Topology Ontology (BOT) | Linked Data Ontologie fuer Gebaeude | Mittel - Semantic Web | Agentenmodellierung in Linked Building Data | RDF-Stores, Semantic Web Apps | Entwicklung |
| 35 | **Externe Beispiele** | | | | | |
| 36 | <!-- TODO: Externe Beispiele ergaenzen --> | | | | | |

*Tabelle: Uebersicht der relevanten Standards*

---

## 5. Wichtigste Standards im Detail (schrittweise Ergaenzung)

### Klassifizierung der Begriffe

Zur einheitlichen Klassifizierung der Begriffe und Standards werden folgende Kategorien verwendet:

- **Fachanwendung:** Operatives IT-System, Register oder Plattform mit definiertem Zweck, Datenhoheit und Schnittstellen.
- **Geschaeftsprozess:** Strukturierte Abfolge von Aktivitaeten zur Erreichung eines klar definierten fachlichen Ziels, inkl. Rollen und Ergebnissen.
- **Geschaeftsobjekt:** Fachlich abgegrenzte Entitaet mit eindeutiger Identitaet ueber ihren Lebenszyklus (z.B. Identifikator, Zustaende).
- **Geschaeftsobjekttyp:** Spezialisierung oder Auspraegung eines Geschaeftsobjekts mit zusaetzlichen Merkmalen oder Regeln.
- **Dokument:** Informationstraeger zur Dokumentation, Kommunikation oder Nachweisfuehrung, analog oder digital, mit Metadaten.
- **Attribut:** Eigenschaft oder Merkmal eines Geschaeftsobjekts, fachlich definiert und typisiert.
- **Fachbegriff:** Begriff, Definition oder Klassifikation mit fachlicher Bedeutung ohne eigene Objektidentitaet.
- **Relation:** Fachlich begruendete Beziehung zwischen Geschaeftsobjekten (z.B. Zugehoerigkeit, Referenz, Abhaengigkeit), inklusive Kardinalitaeten und Regeln.

---

### 5.X. Beispiel Standard

- **Prioritaet:** [Sehr hoch, hoch, mittel, niedrig]
- **Dokumentation:**
  - (Name Dokumentation): URL
- **Beschreibung:** (Kurzbeschreibung)
- **Relevanz fuer BBL:** (Kurzbeschreibung)

| # | Begriff (Original) | Begriff (Deutsche Uebersetzung) | Kategorie | Beschreibung | Relevanz BBL | Kommentar |
|---|--------------------|---------------------------------|-----------|--------------|--------------|-----------|
| 1 | | | | | | |

---

### 5.1. Bundesgesetz ueber die Unternehmens-Identifikationsnummer (UIDG), SR 431.03

- **Prioritaet:** Sehr hoch
- **Dokumentation:** [https://www.fedlex.admin.ch/eli/cc/2010/705/de](https://www.fedlex.admin.ch/eli/cc/2010/705/de)
- **Beschreibung:** Das UIDG regelt die Zuweisung und Verwendung einer einheitlichen Unternehmens-Identifikationsnummer (UID) zur eindeutigen Identifikation von Unternehmen, damit Informationen in administrativen und statistischen Prozessen einfach und sicher ausgetauscht werden koennen. Das Gesetz ist seit 1. Januar 2011 in Kraft und definiert UID-Einheiten, das UID-Register, UID-Stellen sowie die Rahmenbedingungen fuer Datenbekanntgabe und Datenschutz.
- **Relevanz fuer BBL:** Das UIDG ist die verbindliche Rechtsbasis und verpflichtet das BBL, die UID als primaeren Identifikator fuer juristische Personen und Organisationen zu nutzen; Auswirkungen: Mietermanagement (eindeutige Mieter), Beschaffung gemaess BoeB (Bieter/Auftragnehmer mit UID), SAP RE-FX (UID in Geschaeftspartner-Stammdaten), GEVER (Dokumente/Vorgaenge verknuepft) und Vertragsmanagement (durchgaengige Partnerzuordnung).

| # | Begriff (Original) | Begriff (Deutsche Uebersetzung) | Kategorie | Beschreibung | Relevanz BBL | Kommentar |
|---|--------------------|---------------------------------|-----------|--------------|--------------|-----------|
| 1 | Unternehmens-Identifikationsnummer (UID) | Unternehmens-Identifikationsnummer (UID) | Geschaeftsobjekt | Nichtsprechende und unveraenderliche Nummer, die eine UID-Einheit eindeutig identifiziert | Sehr hoch | Primaerer Identifikator fuer alle juristischen Personen und Organisationen in BBL-Systemen |
| 2 | UID-Einheit | UID-Einheit | Geschaeftsobjekt | Im Handelsregister eingetragene Rechtstraeger, natuerliche und juristische Personen, Personengesamtheiten, Verwaltungseinheiten, die zu administrativen Zwecken identifiziert werden muessen | Sehr hoch | Umfasst alle relevanten Stakeholder-Typen des BBL: Mieter, Dienstleister, Bundesstellen, Lieferanten |
| 3 | UID-Register | UID-Register | Fachanwendung | Zentrales Register aller UID-Einheiten und Administrativeinheiten, gefuehrt vom BFS | Sehr hoch | Autoritative Datenquelle fuer Organisationsdaten, Integration via standardisierte Schnittstellen erforderlich |
| 4 | UID-Stelle | UID-Stelle | Geschaeftsobjekttyp | Verwaltungseinheiten von Bund, Kantonen und Gemeinden, oeffentlich-rechtliche Anstalten sowie private Einrichtungen mit oeffentlich-rechtlichen Aufgaben, die Datenbanken ueber UID-Einheiten fuehren | Hoch | BBL kann als UID-Stelle fuer spezifische Fachanwendungen auftreten |
| 5 | Kernmerkmale | Kernmerkmale | Attribut | UID, Status, Name/Firma/Bezeichnung, Adresse, Handelsregisterstatus, Mehrwertsteuerstatus, LEI | Sehr hoch | Oeffentlich zugaengliche Basisdaten, notwendig fuer Geschaeftspartner-Identifikation |
| 6 | Zusatzmerkmale | Zusatzmerkmale | Attribut | Daten zur naeheren Bestimmung der UID-Einheit, z.B. detaillierte Umschreibung, wirtschaftliche Taetigkeit | Hoch | Fuer differenzierte Stakeholder-Kategorisierung und Analysen |
| 7 | Administrativnummer | Administrativnummer | Geschaeftsobjekt | Nummer zur Identifikation von Administrativeinheiten, die nicht als UID-Einheiten gelten | Mittel | Fuer interne Organisationseinheiten ohne UID-Pflicht |
| 8 | Legal Entity Identifier (LEI) | Legal Entity Identifier (LEI) | Attribut | Einheitliche internationale 20-stellige Identifikationsnummer gemaess GLEIS zur eindeutigen Identifikation auf internationaler Ebene | Mittel | Relevant fuer internationale Geschaeftsbeziehungen und Finanzmarkt-Transaktionen |
| 9 | UID-Ergaenzung | UID-Ergaenzung | Attribut | Die UID ergaenzende Bezeichnung fuer Handelsregister ("HR"/"RC") oder Mehrwertsteuerregister ("MWST"/"TVA"/"IVA") | Mittel | Freiwillige Verwendung durch UID-Einheiten, relevant fuer Rechnungsstellung |

---

### 5.2. Verordnung ueber die Unternehmens-Identifikationsnummer (UIDV), SR 431.031

- **Prioritaet:** Sehr hoch
- **Dokumentation:** [https://www.fedlex.admin.ch/eli/cc/2011/81/de](https://www.fedlex.admin.ch/eli/cc/2011/81/de)
- **Beschreibung:** Die UIDV konkretisiert das UIDG und regelt die Ausfuehrungsbestimmungen fuer die Zuweisung, Verwendung und Fuehrung der UID. Sie definiert den Aufbau der UID (Praefix "CHE" + 8-stellige Zufallszahl + Pruefziffer), die Hierarchie der UID-Stellen fuer die Datenhoheit, die spezifischen Merkmale des UID-Registers sowie die Modalitaeten fuer Datenbekanntgabe, Einsichtsrechte und Datenschutz.
- **Relevanz fuer BBL:** Die UIDV ist operativ zentral fuer die Umsetzung der UID in den BBL-Systemen. Sie definiert die technischen und organisatorischen Vorgaben fuer die Integration des UID-Registers in die BBL-IT-Landschaft - von der Datenintegration (Schnittstellen fuer die automatisierte Stammdaten-Synchronisation) ueber die Sicherung der Datenqualitaet (Priorisierung der UID-Stellen: Handelsregister vor AHV-Kassen vor uebrigen Registern zur Aufloesung von Widerspruechen) bis zu den Einsichtsrechten (Zugriff auf Kern- und Zusatzmerkmale fuer das BBL als UID-Stelle) und den Meldepflichten (Prozesse fuer Neuerfassungen und Mutationen, z.B. neue Mieter oder Adressaenderungen).

| # | Begriff (Original) | Begriff (Deutsche Uebersetzung) | Kategorie | Beschreibung | Relevanz BBL | Kommentar |
|---|--------------------|---------------------------------|-----------|--------------|--------------|-----------|
| 1 | Aufbau der UID | Aufbau der UID | Fachbegriff | UID besteht aus Praefix "CHE", 8-stelliger nach Zufallsprinzip zugeteilter Zahl und Pruefziffer | Sehr hoch | Technische Spezifikation fuer Validierung und Darstellung in BBL-Systemen |
| 2 | Register-Hierarchie | Register-Hierarchie | Fachbegriff | Prioritaetsreihenfolge der UID-Stellen: 1. Handelsregister, 2. Branchenregister, 3. AHV/Steuern/MWST, 4. Uebrige Register | Hoch | Massgebend fuer Konfliktaufloesung bei widersprüchlichen Stammdaten |
| 3 | Meldung von UID-Daten | Meldung von UID-Daten | Geschaeftsprozess | UID-Stellen melden dem BFS Daten zu Kernmerkmalen und Zusatzmerkmalen neuer UID-Einheiten, Aenderungen und Loeschungen | Sehr hoch | Definiert Meldepflichten des BBL bei relevanten Aenderungen |
| 4 | Zusatzmerkmale (UIDV) | Zusatzmerkmale (UIDV) | Attribut | Geburtsdatum, NOGA-Code, UID-Kategorie, weitere Identifikationsnummern (AEO, D-U-N-S, GLN), Zustelladresse, Zweigniederlassung, UID-Status, Loeschungsgrund, HR-Daten | Hoch | Erweiterte Stammdaten fuer differenzierte Geschaeftspartner-Verwaltung |
| 5 | Systemmerkmale (UIDV) | Systemmerkmale (UIDV) | Attribut | Datum der Eintragung, massgebende UID-Stelle, Datum der letzten Aenderung, meldende UID-Stelle, Loeschungsdatum, Zugangssperrung, UID-Stellen-Kennzeichnung | Mittel | Technisch-organisatorische Daten fuer Audit und Nachvollziehbarkeit |
| 6 | Einsichtsrecht UID-Stellen | Einsichtsrecht UID-Stellen | Relation | UID-Stellen koennen Kern- und Zusatzmerkmale aller UID-Einheiten einsehen | Hoch | Berechtigt BBL zum Zugriff auf vollstaendige Stammdaten fuer Geschaeftspartner-Management |
| 7 | Sammelabfrage | Sammelabfrage | Geschaeftsprozess | Abfrage von UID zu mehreren Einheiten gleichzeitig unter Angabe von Name und Adresse | Hoch | Relevant fuer initiale Datenmigrationen und Batch-Prozesse |
| 8 | Aufbewahrung geloeschter Daten | Aufbewahrung geloeschter Daten | Fachbegriff | Daten von geloeschten UID-Einheiten werden 30 Jahre aufbewahrt, dann dem Bundesarchiv zur Archivierung angeboten | Mittel | Historisierung fuer langfristige Nachvollziehbarkeit von Geschaeftsbeziehungen |
| 9 | UID-Ergaenzung (UIDV) | UID-Ergaenzung (UIDV) | Attribut | "HR"/"RC" fuer Handelsregister, "MWST"/"TVA"/"IVA" fuer Mehrwertsteuerregister, nachgestellt der UID | Mittel | Freiwillige Fuehrung in Datenbanken, freiwillige Verwendung durch UID-Einheiten |
| 10 | Umwandlung Administrativeinheit | Umwandlung Administrativeinheit | Geschaeftsprozess | Administrativeinheit kann in UID-Einheit umgewandelt werden, dabei wird aus "ADM" + Nummer "CHE" + gleiche Nummer | Niedrig | Fuer Sonderfaelle bei organisatorischen Aenderungen |

---

### 5.3. eCH-0108 - Datenstandard: Unternehmensstammdaten und Unternehmensregister

- **Prioritaet:** Sehr hoch
- **Dokumentation:** [https://www.ech.ch/de/ech/ech-0108/6.0.0](https://www.ech.ch/de/ech/ech-0108/6.0.0)
- **Beschreibung:** Der eCH-0108 Standard (Version 6.0.0) definiert das Austauschformat fuer Unternehmensdaten zwischen BFS-Unternehmensregistern (UID-Register und BUR) und Schweizer Behoerden. Er unterscheidet zwischen rechtlichen Einheiten (juristische Personen mit UID) und oertlichen Einheiten (Betriebe mit BUR-Nummer) und spezifiziert Kern- und Zusatzmerkmale fuer beide Entitaetstypen sowie GWR-validierte Adressdaten.
- **Relevanz fuer BBL:** Definiert die technischen Austauschformate fuer automatisierte Stammdaten-Synchronisation von Geschaeftspartnern (Mieter, Dienstleister, Lieferanten) zwischen BBL-Systemen und BFS-Registern. Ermoeglicht Zugriff auf validierte Unternehmensdaten inkl. Rechtsformen, NOGA-Codes, MWST-Status, GWR-Adressen und register-uebergreifende Identifikatoren fuer qualitaetsgesicherte Geschaeftspartner-Verwaltung ueber alle ca. 2'600-3'000 Bundesimmobilien.

| # | Begriff (Original) | Begriff (Deutsche Uebersetzung) | Kategorie | Beschreibung | Relevanz BBL | Kommentar |
|---|--------------------|---------------------------------|-----------|--------------|--------------|-----------|
| 1 | Rechtliche Einheit (legal unit) | Rechtliche Einheit | Geschaeftsobjekt | Juristische Person, Personengesellschaft oder selbststaendigerwerbende natuerliche Person mit Eintrag im UID-Register | Sehr hoch | Entspricht den Geschaeftspartnern des BBL: Mieter, Dienstleister, Lieferanten |
| 2 | Oertliche Einheit (local unit) | Oertliche Einheit / Betrieb | Geschaeftsobjekt | Betrieb oder Einrichtung an einem bestimmten Ort mit BUR-Nummer, immer einer rechtlichen Einheit zugeordnet | Hoch | Relevant fuer Flaechenmanagement und Betriebskostenabrechnung bei Mietern mit mehreren Standorten |
| 3 | legalUnitMasterData | Stammdaten rechtliche Einheit | Geschaeftsobjekt | Stammdaten der rechtlichen Einheit gemaess BUR: UID, Name, Rechtsform, Status, Hauptadresse | Sehr hoch | Kerndaten fuer Geschaeftspartner-Stammdatensatz in BBL-Systemen |
| 4 | localUnitMasterData | Stammdaten oertliche Einheit | Geschaeftsobjekt | Stammdaten der oertlichen Einheit: BUR-Nummer, Name, Status, NOGA-Code, Groessenklasse, Kontaktdaten, Hauptadresse | Mittel | Fuer differenziertes Flaechenmanagement bei grossen Mietern |
| 5 | legalUnitKeyData | Kernmerkmale rechtliche Einheit | Geschaeftsobjekt | Oeffentlich zugaengliche Daten gemaess UIDG: Status HR/MWST, LEI, legalUnitMasterData | Sehr hoch | Oeffentliche Geschaeftspartner-Daten fuer Transparenz und Compliance |
| 6 | legalUnitAdditionalData | Zusatzmerkmale rechtliche Einheit | Geschaeftsobjekt | UID-spezifische Daten: Typ, NOGA-Code, Loeschungsgrund, HR-Daten, otherRegister, Person Einzelunternehmen, auslaendisches Unternehmen | Hoch | Erweiterte Stammdaten fuer Due Diligence und Geschaeftspartnerpruefung |
| 7 | mainAddress | Hauptadresse | Relation | Lokalisierungsadresse mit GWR-Validierung (EGAID, EGID, EDID, ESID), c/o, Ergaenzung, Post-Zustellbarkeitsstatus | Sehr hoch | Kritisch fuer Korrespondenz, Vertragsmanagement, Rechnungsstellung |
| 8 | additionalLocationAddress | Zusaetzliche Lokalisierungsadresse | Relation | Optionale Korrespondenz- oder Liquidationsadresse mit GWR-Referenzen | Hoch | Fuer Sonderfaelle wie abweichende Rechnungsadressen |
| 9 | additionalPostOfficeBoxAddress | Zusaetzliche Postfachadresse | Relation | Optionale Postfachadresse mit Postleitzahl, Ortschaft, Post-Zustellbarkeitsstatus | Mittel | Alternative Zustelladresse |
| 10 | Rechtsform (legalForm) | Rechtsform | Attribut | Vierstelliger Code: 01xx = Handelsregister, 02xx = oeffentlich-rechtlich, 03xx = uebrige, 04xx = auslaendisch | Sehr hoch | Relevant fuer Vertragsgestaltung, Unterschriftsberechtigung, Compliance |
| 11 | NOGA-Code (nogaCode) | NOGA-Code / Wirtschaftszweig | Attribut | Sechsstelliger Code gemaess Allgemeiner Systematik der Wirtschaftszweige, fuenfte Ebene | Hoch | Fuer Stakeholder-Kategorisierung, Branchenanalysen, Benchmarking |
| 12 | Status | Status | Attribut | Werte: active, deleted | Sehr hoch | Lifecycle-Management von Geschaeftsbeziehungen |
| 13 | commercialRegisterStatus | Status Handelsregistereintrag | Attribut | Werte: active, deleted, noRelation | Hoch | Validierung der Rechtsfaehigkeit von Geschaeftspartnern |
| 14 | vatRegisterStatus | Status Mehrwertsteuereintrag | Attribut | Werte: active, deleted, noRelation | Hoch | Relevant fuer Rechnungsstellung mit MWST |
| 15 | vatStartOfObligation / vatEndOfObligation | Beginn/Ende Mehrwertsteuerpflicht | Attribut | Datum | Hoch | Zeitliche Zuordnung der MWST-Pflicht fuer korrekte Fakturierung |
| 16 | vatUid | UID der Mehrwertsteuerpflicht | Relation | UID unter welcher die rechtliche Einheit mehrwertsteuerpflichtig ist (bei MWST-Gruppen oder Zweigniederlassungen abweichend) | Hoch | Korrekte MWST-Identifikation auf Rechnungen |
| 17 | lei | Legal Entity Identifier | Attribut | 20-stellige internationale Identifikationsnummer gemaess GLEIF | Mittel | Fuer internationale Geschaeftsbeziehungen und Finanzmarkt-Compliance |
| 18 | legalUnitType | Typ der rechtlichen Einheit | Attribut | Werte: mainLegalUnit (Haupteinheit), branchLegalUnit (Nebeneinheit/Zweigniederlassung) | Hoch | Unterscheidung Hauptsitz vs. Zweigniederlassung fuer Vertragsmanagement |
| 19 | mainUid | UID der rechtlichen Haupteinheit | Relation | Verweis auf uebergeordnete Haupteinheit bei Zweigniederlassungen | Hoch | Konzernstrukturen abbilden |
| 20 | otherRegister | Andere Register | Relation | Beziehungen zu anderen Registern (HR, MWST etc.) mit registerId, registerEntryId, registerEntryStatus | Mittel | Register-uebergreifende Validierung |
| 21 | soleProprietorshipPerson | Person Einzelunternehmen | Relation | Natuerliche Person bei Einzelunternehmen: AHV-Nummer, Vor-/Nachname, Geburts-/Todesdatum | Mittel | Datenschutzkonform fuer Vertragspartner natuerliche Personen |
| 22 | foreignOrganisationInformation | Auslaendisches Unternehmen | Relation | Zusatzinformationen bei Sitz im Ausland: Name, Adresse, auslaendische Register, NACE/ISIC-Code, auslaendische Rechtsform, Qualitaet des Eintrags | Mittel | Fuer internationale Stakeholder, Due Diligence |
| 23 | sizeClassFte | Groessenklasse nach Vollzeitaequivalenten | Attribut | Numerischer Code 1-12 fuer Beschaeftigungsgroessenklassen | Mittel | Stakeholder-Segmentierung, Analysen |
| 24 | postDeliverabilityStatus | Post-Zustellbarkeitsstatus | Attribut | Werte: unchecked, isDeliverable, isNotDeliverable (Abgleich mit Post-Adressregister) | Hoch | Qualitaetssicherung fuer Korrespondenz |
| 25 | EGAID | Eidgenoessischer Gebaeudeadressidentifikator | Attribut | GWR-Identifikator fuer Gebaeudeadresse | Sehr hoch | Eindeutige Zuordnung zu Gebaeuden, Integration mit GWR |
| 26 | EGID | Eidgenoessischer Gebaeudeidentifikator | Attribut | GWR-Identifikator fuer Gebaeude | Hoch | Verknuepfung mit Immobilien-Stammdaten |
| 27 | EDID | Eidgenoessischer Eingangsidentifikator | Attribut | GWR-Identifikator fuer Eingang | Mittel | Praezise Adressierung |
| 28 | ESID | Eidgenoessischer Strassenidentifikator | Attribut | GWR-Identifikator fuer Strasse | Mittel | Strassenbezug |

---

### 5.4. IBPDI Common Data Model (Organizational Management Cluster)

- **Prioritaet:** Hoch
- **Dokumentation:** [https://ibpdi.org/](https://ibpdi.org/) | [https://github.com/ibpdi/cdm](https://github.com/ibpdi/cdm)
- **Beschreibung:** Der IBPDI Common Data Model (CDM) fuer Real Estate ist ein globaler, branchenweiter Open-Source-Datenstandard, der in Zusammenarbeit mit Microsoft, RICS, pom+ und BuildingMinds entwickelt wurde. Das CDM ist modular in Cluster strukturiert, die verschiedene Spezialisierungen der Immobilienbranche abdecken. Der Organizational Management Cluster definiert Entitaeten fuer Organisationen, Kontakte, Adressen, Rollen und deren Beziehungen zu Immobilienobjekten ueber den gesamten Lebenszyklus.
- **Relevanz fuer BBL:** Das IBPDI CDM bietet ein zukunftsfaehiges, erweiterbares Framework fuer Stakeholder-Management im Immobilienportfolio. Als internationale Best Practice ermoeglicht es die Integration mit Digital Twin-Strategien, Advanced Analytics und KI-Anwendungen. Der Organizational Management Cluster strukturiert Beziehungen zwischen Akteuren (Mieter, Dienstleister, Behoerden) und Immobilienobjekten (Buildings, Sites, Components) rollenbasiert und ermoeglicht damit praezises Tracking von Verantwortlichkeiten ueber Portfolio-, Asset-, Property- und Facility-Management-Ebenen hinweg.

| # | Begriff (Original) | Begriff (Deutsche Uebersetzung) | Kategorie | Beschreibung | Relevanz BBL | Kommentar |
|---|--------------------|---------------------------------|-----------|--------------|--------------|-----------|
| 1 | Organisation | Organisation | Geschaeftsobjekt | Information about organisations (internal and external) | Sehr hoch | Kernentitaet fuer alle Geschaeftspartner: Mieter, Dienstleister, Behoerden, Bundesstellen |
| 2 | Contact | Kontakt | Geschaeftsobjekt | Contact details | Sehr hoch | Ansprechpartner und Kontaktinformationen fuer Kommunikation |
| 3 | Address | Adresse | Geschaeftsobjekt | Collection of information used to give the location of a building, apartment, or other structure or a plot of land | Sehr hoch | Lokalisierung und Korrespondenz fuer alle Stakeholder |
| 4 | Role | Rolle | Geschaeftsobjekt | Defining the role of the organisation or contact | Sehr hoch | Zentrale Entitaet fuer Verantwortlichkeitszuordnung (Eigentuemer, Mieter, Betreiber, Wartung, etc.) |
| 5 | GeoCoordinate | Geokoordinate | Geschaeftsobjekt | Information about geographic data to enable the use of common locations of geographic features, imagery, and observation within a common geographic framework | Hoch | Raeumliche Verortung fuer GIS-Integration und raeumliche Analysen |
| 6 | AddressBuilding | Adresse-Gebaeude-Verknuepfung | Relation | Linking entity between Address and Building | Sehr hoch | Zuordnung von Adressen zu Gebaeuden fuer Objektverwaltung |
| 7 | AddressContact | Adresse-Kontakt-Verknuepfung | Relation | Linking entity between Address and Contact | Hoch | Kontaktadressen fuer Kommunikation und Korrespondenz |
| 8 | AddressLand | Adresse-Grundstueck-Verknuepfung | Relation | Linking entity between Address and Land | Mittel | Grundstueckszuordnung fuer Liegenschaftsverwaltung |
| 9 | AddressOrganisation | Adresse-Organisation-Verknuepfung | Relation | Linking entity between Address and Organisation | Sehr hoch | Geschaeftspartneradressen fuer Vertragsmanagement |
| 10 | AddressRentalUnit | Adresse-Mieteinheit-Verknuepfung | Relation | Linking entity between Address and RentalUnit | Hoch | Mietflaechenzuordnung fuer Mietermanagement |
| 11 | AddressSite | Adresse-Standort-Verknuepfung | Relation | Linking entity between Address and Site | Hoch | Standortadressen fuer Multi-Site-Portfolios |
| 12 | RoleBuildingContact | Rolle-Gebaeude-Kontakt | Relation | Linking entity between Role, Building and Contact | Sehr hoch | Gebaeudeverantwortliche (Hausmeister, Projektleiter, etc.) |
| 13 | RoleBuildingOrganisation | Rolle-Gebaeude-Organisation | Relation | Linking entity between Role, Building and Organisation | Sehr hoch | Organisatorische Gebaeudeverantwortung (FM-Dienstleister, Eigentuemer) |
| 14 | RoleComponentContact | Rolle-Komponente-Kontakt | Relation | Linking entity between Role, Component and Contact | Hoch | Anlagenverantwortliche fuer technisches Gebaeudemanagement |
| 15 | RoleComponentOrganisation | Rolle-Komponente-Organisation | Relation | Linking entity between Role, Component and Organisation | Hoch | Wartungsvertraege und Serviceverantwortung |
| 16 | RoleComponentTypeContact | Rolle-Komponententyp-Kontakt | Relation | Linking entity between Role, ComponentType and Contact | Mittel | Standardisierte Verantwortlichkeiten nach Anlagentypen |
| 17 | RoleComponentTypeOrganisation | Rolle-Komponententyp-Organisation | Relation | Linking entity between Role, ComponentType and Organisation | Mittel | Rahmenvertraege fuer Anlagenkategorien |
| 18 | RoleEmissionFactorContact | Rolle-Emissionsfaktor-Kontakt | Relation | Linking entity between Role, EmissionFactor and Contact | Mittel | Verantwortlichkeiten fuer Nachhaltigkeitsmanagement |
| 19 | RoleEmissionFactorOrganisation | Rolle-Emissionsfaktor-Organisation | Relation | Linking entity between Role, EmissionFactor and Organisation | Mittel | Organisatorische Zustaendigkeit fuer ESG-Reporting |
| 20 | RoleLandContact | Rolle-Grundstueck-Kontakt | Relation | Linking entity between Role, Land and Contact | Mittel | Grundstuecksverantwortliche |
| 21 | RoleLandOrganisation | Rolle-Grundstueck-Organisation | Relation | Linking entity between Role, Land and Organisation | Mittel | Grundstueckseigentuemer und -verwalter |
| 22 | RoleOperationalMeasurementContact | Rolle-Betriebsmessung-Kontakt | Relation | Linking entity between Role, OperationalMeasurement and Contact | Hoch | Verantwortliche fuer Energie- und Verbrauchsmanagement |
| 23 | RoleOperationalMeasurementOrganisation | Rolle-Betriebsmessung-Organisation | Relation | Linking entity between Role, OperationalMeasurement and Organisation | Hoch | Energieversorger und Messdienstleister |
| 24 | RolePortfolioContact | Rolle-Portfolio-Kontakt | Relation | Linking entity between Role, Portfolio and Contact | Hoch | Portfolio-Manager und strategische Verantwortliche |
| 25 | RolePortfolioOrganisation | Rolle-Portfolio-Organisation | Relation | Linking entity between Role, Portfolio and Organisation | Hoch | Organisatorische Portfolio-Verantwortung |
| 26 | RolePortfolioStrategyContact | Rolle-Portfoliostrategie-Kontakt | Relation | Linking entity between Role, PortfolioStrategy and Contact | Mittel | Strategische Entscheidungstraeger |
| 27 | RolePortfolioStrategyOrganisation | Rolle-Portfoliostrategie-Organisation | Relation | Linking entity between Role, PortfolioStrategy and Organisation | Mittel | Strategische Partner und Beratung |
| 28 | RoleRentalContractContact | Rolle-Mietvertrag-Kontakt | Relation | Linking entity between Role, RentalContract and Contact | Sehr hoch | Mietvertragspartner und Ansprechpartner |
| 29 | RoleRentalContractOrganisation | Rolle-Mietvertrag-Organisation | Relation | Linking entity between Role, RentalContract and Organisation | Sehr hoch | Mieter als Organisation (Bundesstellen, externe Mieter) |
| 30 | RoleRentalUnitContact | Rolle-Mieteinheit-Kontakt | Relation | Linking entity between Role, RentalUnit and Contact | Hoch | Nutzungsspezifische Ansprechpartner |
| 31 | RoleRentalUnitOrganisation | Rolle-Mieteinheit-Organisation | Relation | Linking entity between Role, RentalUnit and Organisation | Hoch | Flaechennutzer und Mieter |
| 32 | RoleSiteContact | Rolle-Standort-Kontakt | Relation | Linking entity between Role, Site and Contact | Hoch | Standortverantwortliche |
| 33 | RoleSiteOrganisation | Rolle-Standort-Organisation | Relation | Linking entity between Role, Site and Organisation | Hoch | Standortbetreiber und -verwalter |
| 34 | RoleSystemContact | Rolle-System-Kontakt | Relation | Linking entity between Role, System and Contact | Mittel | System- und Anlagenverantwortliche |
| 35 | RoleSystemOrganisation | Rolle-System-Organisation | Relation | Linking entity between Role, System and Organisation | Mittel | Systemlieferanten und -betreiber |
| 36 | RoleTenantCommunicationContact | Rolle-Mieterkommunikation-Kontakt | Relation | Linking entity between Role, TenantCommunication and Contact | Hoch | Kontakte fuer Mieterkommunikation |
| 37 | RoleTenantCommunicationOrganisation | Rolle-Mieterkommunikation-Organisation | Relation | Linking entity between Role, TenantCommunication and Organisation | Hoch | Organisationen in Mieterkommunikationsprozessen |
| 38 | RoleValuationContact | Rolle-Bewertung-Kontakt | Relation | Linking entity between Role, Valuation and Contact | Mittel | Bewertungsverantwortliche |
| 39 | RoleValuationOrganisation | Rolle-Bewertung-Organisation | Relation | Linking entity between Role, Valuation and Organisation | Mittel | Bewertungsgesellschaften und Gutachter |

---

## 6. Verweise und Anhang

### 6.1 Verweise

<!-- TODO: Relevante Verweise werden hier ergaenzt -->

### 6.2 Anhang

| Datei | Beschreibung | Geaendert |
|-------|--------------|-----------|
| <!-- TODO --> | <!-- TODO --> | <!-- TODO --> |

---

*Letzte Aktualisierung: <!-- TODO: Datum ergaenzen -->*
