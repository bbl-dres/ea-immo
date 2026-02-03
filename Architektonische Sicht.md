# Detailstudie - Architektonische Sicht

> **Arbeitsdokument**
>
> - Inhalte werden als PDFs im Anhang versioniert (nur Meilensteine)
> - Zugang zum Dokument ist auf Mitarbeiter der Bundesverwaltung eingeschränkt (open by default)
> - Inhalte können mit Abstimmung Rasner David BBL extern geteilt werden

---

## Inhalt

1. [Ziel dieses Dokuments](#1-ziel-dieses-dokuments)
2. [Die Architektonische Sicht – Aufgaben und Bedeutung](#2-die-architektonische-sicht--aufgaben-und-bedeutung)
   - 2.1 [Rolle im Immobilienmanagement](#21-rolle-im-immobilienmanagement)
   - 2.2 [Inhaltliche Dimensionen](#22-inhaltliche-dimensionen)
   - 2.3 [Kernaufgaben](#23-kernaufgaben)
   - 2.4 [Strategische Bedeutung](#24-strategische-bedeutung)
3. [Empfehlung Geschäftsobjekte (Konsolidiert)](#3-empfehlung-geschäftsobjekte-konsolidiert)
4. [Übersicht der relevanten Standards](#4-übersicht-der-relevanten-standards)
   - 4.1 [Bewertungskriterien für «Relevanz für BBL»](#41-bewertungskriterien-für-relevanz-für-bbl)
   - 4.2 [Strategische Einordnung (Kategorie Standards)](#42-strategische-einordnung-kategorie-standards)
   - 4.3 [Übersicht als Tabelle](#43-übersicht-als-tabelle)
5. [Wichtigste Standards im Detail (schrittweise Ergänzung)](#5-wichtigste-standards-im-detail-schrittweise-ergänzung)
   - 5.1 [Schweizerisches Zivilgesetzbuch (ZGB), Art. 655-712](#51-schweizerisches-zivilgesetzbuch-zgb-art-655-712)
   - 5.2 [Grundbuchverordnung (GBV)](#52-grundbuchverordnung-gbv)
   - 5.3 [Verordnung über das Gebäude- und Wohnungsregister (VGWR)](#53-verordnung-über-das-gebäude--und-wohnungsregister-vgwr)
   - 5.4 [DM.01-AV-CH Datenmodell der amtlichen Vermessung](#54-dm01-av-ch-datenmodell-der-amtlichen-vermessung)
   - 5.5 [eCH-0129 Objektwesen](#55-ech-0129-objektwesen)
   - 5.6 [eCH-0153 eGRISDM (Grundbuch)](#56-ech-0153-egrisdm-grundbuch)
   - 5.7 [Bauen Digital Schweiz (Datenfeldkataloge)](#57-bauen-digital-schweiz-datenfeldkataloge)
   - 5.8 [Building Smart (IFC / ISO 16739)](#58-building-smart-ifc--iso-16739)
   - 5.9 [IBPDI (International Building Performance and Data Initiative)](#59-ibpdi-international-building-performance-and-data-initiative)
   - 5.10 [Real Estate Core (REC)](#510-real-estate-core-rec)
   - 5.11 [SIA 416 (Flächen und Volumen von Gebäuden)](#511-sia-416-flächen-und-volumen-von-gebäuden)
   - 5.12 [CRB eBKP-H (Elementbasierter Baukostenplan Hochbau)](#512-crb-ebkp-h-elementbasierter-baukostenplan-hochbau)
   - 5.X [BIMids](#5x-bimids)
6. [Verweise und Anhang](#6-verweise-und-anhang)

---

## 1. Ziel dieses Dokuments

Dieses Fachkonzept legt die Grundlagen für ein einheitliches Verständnis und die Modellierung von Daten im Bundesamt für Bauten und Logistik (BBL) fest. Es dient als verbindliches Referenzwerk, um sicherzustellen, dass alle Fachbereiche und IT-Systeme mit denselben Konzepten und Definitionen arbeiten können.

Die Kernziele dieses Dokuments sind:

1. **Definition zentraler Geschäftsobjekte:** Klare und konsistente Definition der domänenspezifischen Geschäftsobjekte und deren Attribute, unabhängig von spezifischen IT-Systemen.
2. **Standardkonformität:** Sicherstellung, dass die Datenmodellierung den anerkannten nationalen und internationalen Gesetzesvorgaben und Best-Practice-Standards folgt.
3. **Interoperabilität:** Schaffung einer Basis für den nahtlosen Austausch und die Integration von Daten über verschiedene Systeme und Prozesse hinweg.
4. **Langfristige Datenqualität:** Beitrag zur Sicherung der Qualität und Konsistenz der Daten, um die Abhängigkeit von einzelnen IT-Systemen zu reduzieren und eine langfristige Nutzbarkeit zu gewährleisten.
5. **Brücke zwischen Fach und IT:** Bereitstellung eines Referenzwerks, das als gemeinsame Sprache zwischen fachlichen Anforderungen und deren technischer Umsetzung dient.
6. **Fundament für strategische Entscheidungen:** Schaffung einer faktenbasierten Grundlage für strategische Entscheidungen, operative Steuerung und Compliance-Management.

---

## 2. Die Architektonische Sicht – Aufgaben und Bedeutung

### 2.1 Rolle im Immobilienmanagement

Die Architektonische Sicht bildet das **Fundament des fachlichen Datenmodells** für das Immobilienmanagement im BBL. Sie repräsentiert die physische, räumliche und rechtliche Realität von Immobilien und schafft die unverzichtbare Referenzbasis für alle nachgelagerten Prozess Domänen (Mietermanagement, Objektmanagement, Energiemanagement, Projektmanagement, etc.).

![Vorschlag Domänengruppen IMMO](assets/architektonische-sicht_domaenengruppen.png)

*Bild: Vorschlag Domänengruppen IMMO*

### 2.2 Inhaltliche Dimensionen

Die Architektonische Sicht umfasst vier zentrale Dimensionen:

- **Physische Struktur:** Grundstücke, Gebäude, Geschosse, Räume, Gebäudetechnische Anlagen und Komponenten in hierarchischer Gliederung.
- **Rechtliche Verhältnisse:** Eigentum, Baurechte, Stockwerkeigentum, öffentlich-rechtliche Eigentumsbeschränkungen (ÖREB) gemäss schweizerischem Recht.
- **Performance und Qualität:** Flächenkennzahlen (SIA 416), energetische Eigenschaften, Zertifikate (MINERGIE, BREEAM), technische Leistungsparameter und Zustandsbewertungen.
- **Lebenszyklus:** Bauphasen, Bewilligungen, Wartungszyklen und Änderungsmanagement.

### 2.3 Kernaufgaben

- **Standardisierte Strukturierung:** Einheitliche Objekthierarchien mit eindeutigen Identifikatoren (EGID, EGRID, EDID) gemäss schweizerischen Standards.
- **Integration und Interoperabilität:** Harmonisierung verschiedener Datenquellen, standardkonforme Schnittstellen zu externen Systemen (GWR, ÖREB) und medienbruchfreier Datenaustausch.
- **Qualitätssicherung:** Datenqualitätsstandards, Konsistenzprüfungen, Historisierung und rollenbasierte Zugriffskontrolle.
- **Digital Twin Fundament:** Strukturelles Rückgrat für digitale Zwillinge mit geometrischer Repräsentation, semantischen Verknüpfungen und echtzeitfähigen Datenstrukturen.

### 2.4 Strategische Bedeutung

Die Architektonische Sicht gewährleistet Rechtssicherheit und Compliance durch rechtskonforme Datenhaltung und eindeutige Objektidentifikation. Sie schafft eine langfristige, technologieunabhängige Datenbasis, die skalierbar und interoperabel mit der schweizerischen E-Government-Landschaft ist.

Als zentrale Domäne ermöglicht sie die nahtlose Integration aller Immobilienprozesse über den gesamten Lebenszyklus und bildet die Grundlage für zukünftige Technologien wie IoT, KI und Advanced Analytics.

Die konkrete Umsetzung erfolgt durch die Geschäftsobjekte in Kapitel 3 und die detaillierten Standards in Kapitel 5.

---

## 3. Empfehlung Geschäftsobjekte (Konsolidiert)

### Bedeutung der Prioritätsstufen

- **Muss:** Geschäftsobjekte, die für die fachliche Vollständigkeit der Architektonischen Sicht zwingend erforderlich sind. Diese Objekte bilden das Kerngerüst des Datenmodells und sind für die grundlegenden Geschäftsprozesse im Immobilienmanagement unabdingbar.
- **Soll:** Geschäftsobjekte, die das fachliche Datenmodell um wichtige Aspekte erweitern und die praktische Anwendbarkeit erheblich steigern. Sie sind nicht kritisch für die Grundfunktionalität, aber wichtig für eine vollständige fachliche Abbildung der Immobilienwelt.
- **Kann:** Geschäftsobjekte, die zusätzlichen fachlichen Mehrwert bieten und erweiterte Anwendungsfälle ermöglichen. Sie erweitern das Datenmodell um spezialisierte Bereiche, sind aber nicht für die Kerngeschäftsprozesse erforderlich.
- **Wird nicht:** Geschäftsobjekte, die bewusst nicht in der Architektonischen Sicht modelliert werden, entweder weil sie durch andere Objekte fachlich abgedeckt sind oder weil sie fachlich in anderen Domänen zugeordnet sind.

### Übersicht Geschäftsobjekte

| Nr | Gruppe / Geschäftsobjekt | Priorität | Beschreibung | Primäre Identifikatoren | Relevante Standards | Kommentar |
|----|--------------------------|-----------|--------------|-------------------------|---------------------|-----------|
| 1 | **Räumliche Objekte** | | | | | |
| 2 | Standort | Kann | Geografische Gruppierung mehrerer Grundstücke und Gebäude für Verwaltungszwecke | Standort-ID | IFC (IfcSite), IBPDI (Site) | Bildet Areale oder ein Campus |
| 3 | Grundstück | Muss | Räumlich abgrenzbare Bodeneinheit mit eigenständigen Eigentumsrechten | EGRID / Grundstück-ID | ZGB, GBV, eCH-0129, eGRISDM | Rechtliche Grundlage, global |
| 4 | Bodenabdeckung | Soll | Versiegelte und unversiegelte Flächen gemäss amtlicher Vermessung | EGID für Art = Gebäude, sonst nur technische IDs (GUID) | DM.01-AV-CH, eGRISDM | Für Umgebungsflächenmanagement |
| 5 | Gebäude | Muss | Mit dem Boden fest verbundenes Bauwerk mit eindeutiger Identifikation | EGID / Gebäude-ID | VGWR, eCH-0129, IFC, IBPDI | Zentrale Verwaltungseinheit, global |
| 6 | Geschoss | Muss | Horizontale Gliederungsebene innerhalb eines Gebäudes | Geschoss-Nr | VGWR, IFC, SIA 416 | Für Flächenmanagement, bildet ein CAFM Basisplan |
| 7 | Raum | Soll | Funktional definierter Bereich innerhalb eines Geschosses | Raum-Nr | IFC, IBPDI, SIA 416 | Detaillierteste Verwaltungseinheit |
| 8 | Fläche / Bemessung | Muss | 2D Darstellung von Räumlichen Objekten | | | |
| 9 | Gebäudeeingang | Soll | Physischer Zugang zu einem Gebäude | EDID | VGWR, eCH-0129 | Für Adressierung und Zugang |
| 10 | Zone | Soll | Funktionale oder technische Bereiche (Brandabschnitte, Klimazonen) | Zone-ID | Bauen Digital CH, IFC | Für spezialisierte Anwendungen |
| 11 | Nutzungseinheit | Soll | Bauliche Einheit mit eigenem Zugang (Wohnung, Gewerbe, sonstige Nutzung) | EWID / Einheit-ID | VGWR, eCH-0129 | Erweitert Wohnung um alle Nutzungsarten |
| 12 | Wohnung | Wird nicht | Bauliche Einheit mit eigenem Zugang (bei Wohnimmobilien) | EWID | VGWR, eCH-0129 | Durch "Einheit (Nutzungseinheit)" abgedeckt |
| 13 | Parkplatz | Soll | Stellfläche für Fahrzeuge, Velos, oder Sonstiges, mit eindeutiger ID | Parkplatz-ID | - | Werden in Reservierungssystemen genutzt |
| 14 | **Rechtliche Objekte** | | | | | |
| 15 | Person | Wird nicht | Natürliche oder juristische Person mit Bezug zu Immobilien | EGBPID, AHV-Nr / Person-ID | ZGB, GBV, eCH-0129, eGRISDM | Eigene Domäne "Organisatorische Daten" |
| 16 | Eigentumsrecht | Soll | Rechtliche Zuordnung von Eigentum an Grundstücken/Gebäuden | EREID | ZGB, eGRISDM | Rechtliche Grundlage |
| 17 | Baurecht | Kann | Selbständiges und dauerndes Recht auf fremdem Grundstück | EREID | ZGB, eGRISDM | Für komplexe Rechtsverhältnisse |
| 18 | Dienstbarkeit | Kann | Beschränkung des Eigentums zugunsten eines berechtigten Grundstücks | EREID | ZGB, eGRISDM | Für Zugangs- und Leitungsrechte |
| 19 | **Technische Objekte** | | | | | |
| 20 | System | Kann | Funktionale Gruppierung technischer Anlagen (HLK, Elektro, Sanitär) | System-ID | IFC, IBPDI | Nicht nur für TGA-Management, Systeme können auch Fassaden, Tragwerke sein |
| 21 | Technische Anlage | Muss | HLK Gebäudetechnische Anlage (Heizung, Klima, Lüftung) | Anlage-ID | SIA, GEFMA | Ist ein Typ von System (Ausprägung) |
| 22 | Heizungsanlage | Soll | Wärmeerzeugung, -verteilung und -abgabe | Heizung-ID | IFC, IBPDI, REC, Brick Schema, eBKP-H (D05) | Spezialisierung von System. Zentral für Wärmeversorgung |
| 23 | Lüftungsanlage | Soll | Luftaufbereitung, -verteilung und Luftwechsel | Lüftung-ID | IFC, IBPDI, REC, Brick Schema, ASHRAE, eBKP-H (D07) | Spezialisierung von System. Wichtig für Luftqualität |
| 24 | Kälteanlage | Soll | Kälteerzeugung, -verteilung und Klimatisierung | Kälte-ID | IFC, IBPDI, REC, Brick Schema, ASHRAE, eBKP-H (D06) | Spezialisierung von System. Kühlung und Klimatisierung |
| 25 | Elektroanlage | Soll | Elektrische Versorgungssysteme inkl. Stark- und Schwachstrom | Elektro-ID | IFC, IBPDI, REC, Brick Schema, eBKP-H (D01) | Spezialisierung von System. Kritisch für Gebäudebetrieb |
| 26 | Beleuchtungsanlage | Soll | Beleuchtungssysteme inkl. Steuerung und Notbeleuchtung | Beleuchtung-ID | IFC, IBPDI, REC, Brick Schema, DALI | Spezialisierung von System. Energieeffizienz und Komfort |
| 27 | Sanitäranlage | Soll | Wasser- und Abwassersysteme inkl. aller sanitären Installationen | Sanitär-ID | IFC, IBPDI, REC, eBKP-H (D08/D09) | Spezialisierung von System. Grundversorgung |
| 28 | Aufzugsanlage | Soll | Vertikale Beförderungsanlagen (Aufzüge, Fahrtreppen) | Aufzug-ID | IFC, IBPDI, REC, eBKP-H (D12) | Spezialisierung von System. Wichtig für Barrierefreiheit |
| 29 | Brandschutzanlage | Soll | Technische Brandschutzeinrichtungen (Sprinkler, Brandmelder, RWA) | Brandschutz-ID | IFC, IBPDI, REC, eBKP-H (D04), VKF | Spezialisierung von System. Sicherheitskritisch |
| 30 | Sicherheitsanlage | Soll | Einbruch-, Zutritts- und Überwachungssysteme | Sicherheit-ID | IFC, IBPDI, REC, eBKP-H (D03) | Spezialisierung von System. Schutz von Personen und Sachwerten |
| 31 | Kommunikationsanlage | Soll | IT-Netzwerke, Telefonie, Datenübertragung | Komm-ID | IFC, IBPDI, REC, Brick Schema | Spezialisierung von System. Digitale Infrastruktur |
| 32 | Gebäudeautomation | Soll | Mess-, Steuer- und Regelungssysteme für Gebäudetechnik | GA-ID | IFC, IBPDI, REC, Brick Schema, BACnet, eBKP-H (D02) | Spezialisierung von System. Basis für Smart Building |
| 33 | Energieerzeugungsanlage | Soll | Photovoltaik, BHKW, Wärmepumpen zur Eigenproduktion | Energie-ID | IFC, IBPDI, REC, Brick Schema | Spezialisierung von System. Nachhaltigkeit und Autarkie |
| 34 | Komponente | Muss | Einzelne technische Bauteile und Geräte | Komponenten-ID | IFC, IBPDI, Bauen Digital CH | Für Wartung und Betrieb |
| 35 | Sensor | Soll | IoT-Geräte zur Performance-Überwachung | Sensor-ID | IBPDI | Für IoT und Smart Building |
| 36 | **Konstruktive Objekte** | | | | | |
| 37 | Bauteil | Soll | Physische Bauteile der Gebäudestruktur | Bauteil-ID | IFC, Bauen Digital CH | Übergeordnete Klasse für alle konstruktiven Elemente |
| 38 | Bauteiltyp | Soll | Standardisierte Typendefinition für Bauteile | Typ-ID | IFC (IfcBuildingElementType), Bauen Digital CH | Ermöglicht Wiederverwendung von Standards |
| 39 | Wand | Soll | Vertikale raumabschliessende oder tragende Konstruktion | Bauteil-ID | IFC (IfcWall), eBKP-H (C2/E/G1), SIA 416 | Spezialisierung von Bauteil. Tragend/Nichttragend, Aussen/Innen |
| 40 | Decke/Bodenplatte | Soll | Horizontale tragende Konstruktion | Bauteil-ID | IFC (IfcSlab), eBKP-H (C3), SIA 260 | Spezialisierung von Bauteil. Inkl. Bodenplatten |
| 41 | Dach | Soll | Oberer Gebäudeabschluss mit Witterungsschutz | Bauteil-ID | IFC (IfcRoof), eBKP-H (F), SIA 232 | Spezialisierung von Bauteil. Flach-/Steildach |
| 42 | Stütze | Soll | Vertikales Tragelement | Bauteil-ID | IFC (IfcColumn), eBKP-H (C2.2) | Spezialisierung von Bauteil |
| 43 | Träger/Balken | Soll | Horizontales Tragelement | Bauteil-ID | IFC (IfcBeam), eBKP-H (C2.3) | Spezialisierung von Bauteil |
| 44 | Fundament | Soll | Gründungskonstruktion des Gebäudes | Bauteil-ID | IFC (IfcFooting), eBKP-H (C1), SIA 267 | Spezialisierung von Bauteil. Basis des Tragwerks |
| 45 | Treppe | Soll | Vertikale Erschliessung zwischen Geschossen | Bauteil-ID | IFC (IfcStair), eBKP-H (G4), SIA 500 | Spezialisierung von Bauteil. Sicherheitsrelevant |
| 46 | Tür | Soll | Bewegliches Element für Raumzugang | Bauteil-ID | IFC (IfcDoor), eBKP-H (G2.1), SIA 343 | Spezialisierung von Bauteil. Inkl. Brandschutztüren |
| 47 | Fenster | Soll | Öffnung in Aussenwand für Belichtung/Lüftung | Bauteil-ID | IFC (IfcWindow), eBKP-H (E3), SIA 331 | Spezialisierung von Bauteil. Energierelevant |
| 48 | Fassade | Soll | Aussenhaut des Gebäudes | Bauteil-ID | IFC (IfcCurtainWall), eBKP-H (E), SIA 243 | Spezialisierung von Bauteil. Vorhangfassade oder massive Fassade |
| 49 | **Bauprodukte und Materialien** | | | | | |
| 50 | Bauprodukt | Muss | Vorgefertigtes oder katalogisiertes Produkt für den Einbau | Produkt-ID | IFC (IfcProduct), NPK, CRB | Basis für Produktkataloge und Beschaffung |
| 51 | Material | Soll | Werkstoff mit physikalischen und ökologischen Eigenschaften | Material-ID | IFC (IfcMaterial), KBOB, Minergie-ECO | Zentral für Nachhaltigkeit und Bauphysik |
| 52 | Materialschicht | Kann | Einzelne Schicht in einem Schichtaufbau | Schicht-ID | IFC (IfcMaterialLayer), SIA 180 | Für bauphysikalische Berechnungen |
| 53 | Schichtaufbau | Kann | Mehrschichtiger Materialverbund eines Bauteils | Aufbau-ID | IFC (IfcMaterialLayerSet), SIA 279 | U-Wert, Schallschutz, Brandschutz |
| 54 | **Übergreifend** | | | | | |
| 55 | Adresse | Muss | Strukturierte Adressinformationen für Grundstücke, Gebäude und Eingänge | Adresse-ID | eCH-0010, VGWR, DM.01-AV-CH | In Domäne "Organisatorische Daten" verschoben |
| 56 | Koordinaten | Soll | Geografische Koordinaten für räumliche Objekte | Koordinaten-ID | DM.01-AV-CH, LV95, IBPDI | In Domäne "Organisatorische Daten" verschoben |
| 57 | Zertifikat | Soll | Zertifikate für Gebäude, Anlagen, Bauprodukte | Zertifikat-ID | IBPDI, Bauen Digital CH | Für alle Objekte relevant (MINERGIE, CE, etc.) |
| 58 | Dokument | Wird nicht | Pläne, Gutachten, Bewilligungen, Verträge | Dokument-ID | Bauen Digital CH | Eigene Domäne "Dokumentenmanagement" |
| 59 | **Messungen/Performance** | | | | | |
| 60 | Bemessung | Muss | Flächen, Volumen, Längen, Stückzahlen nach SIA 416 | Bemessung-ID | SIA 416, IBPDI | Flexibel für alle Messgrössen |
| 61 | Sensormessung | Soll | Zeitreihen-Messwerte von IoT-Sensoren | Messung-ID | IBPDI | Für Performance-Monitoring |
| 62 | Performance-Kennzahl | Wird nicht | Aggregierte KPIs für Energie, Kosten, Nachhaltigkeit | KPI-ID | IBPDI | Eigene Domäne "Reporting und Analytics" |
| 63 | **Projektbezogen** | | | | | |
| 64 | Bauprojekt | Wird nicht | Bewilligungspflichtiges Bauvorhaben mit Lebenszyklus-Tracking | EPROID | VGWR, eCH-0129, eCH-0130 | Eigene Domäne "Projektmanagement" |

*Tabelle: Empfehlung Geschäftsobjekte (Konsolidiert)*

![Vereinfachte Darstellung Geschäftsobjekte](assets/Architektonische%20Sicht/architektonische-sicht_02_vereinfachte-darstellung.jpg)

*Bild: Vereinfachte Darstellung*

![Flowchart Darstellung von Geschäftsobjekten](assets/Architektonische%20Sicht/architektonische-sicht_03_flowchart-geschaeftsobjekte.png)

*Bild: Flowchart Darstellung von Geschäftsobjekten (konsolidiert)*

---

## 4. Übersicht der relevanten Standards

### 4.1 Bewertungskriterien für «Relevanz für BBL»

- **Sehr hoch:** Rechtlich oder regulatorisch verpflichtend; grundlegende Voraussetzung für Kernprozesse und -systeme; verbindliche interne Vorgabe; oder unmittelbar umsetzbarer, priorisierter Use Case mit hohem Nutzen.
- **Hoch:** Branchenweit anerkannte Praxis in der Schweiz; wesentlich für Rechtssicherheit, Compliance oder Interoperabilität; wichtig für robuste Integration in bestehende Prozess- und Datenflüsse.
- **Mittel:** Ergänzend oder domänenspezifisch; nützlich für Spezialfälle, Pilotierungen oder als Referenz; optional ohne unmittelbaren Umsetzungsdruck.
- **Niedrig:** Informativ; geringe direkte Anwendbarkeit im Betrieb; Beobachten/Monitoring ausreichend.

### 4.2 Strategische Einordnung (Kategorie Standards)

Die Standards und Use Cases lassen sich in folgende strategische Kategorien einordnen:

- **Rechtliche Grundlagen:** Rechtlich bindende Vorgaben auf Bundes- oder Verordnungsebene; definieren Mindestanforderungen und Rahmenbedingungen.
- **BBL Weisungen und Prozesse:** Interne, verbindliche Standards und Prozessmodelle; legen organisatorische Zuständigkeiten, Abläufe und Qualitätsvorgaben fest.
- **BBL Fachanwendungen:** Operative IT-Systeme und Register für fachliche Leistungen und Verwaltungsaufgaben; stellen Funktionen und Schnittstellen für die Datenintegration bereit.
- **Technische Standards:** Normen und Integrationsstandards (z. B. Datenmodelle, Schnittstellen, Qualitäts- und Leistungskataloge), die Austauschformate und Qualitätsstufen definieren.
- **Externe Beispiele:** Verifizierte Praxisbeispiele und Best-Practice-Implementierungen als Referenz für erfolgreiche Umsetzungen und innovative Ansätze.

### 4.3 Übersicht als Tabelle

| Nr | Kategorie / Name des Standards | Zweck (Kurz) | Relevanz für BBL | Anwendung BBL | Schnittstellen | Status |
|----|-------------------------------|--------------|------------------|---------------|----------------|--------|
| 1 | **Rechtliche Grundlagen** | | | | | |
| 2 | Schweizerisches Zivilgesetzbuch (ZGB), Art. 655-712 | Definiert Sachenrecht für Grundeigentum | Sehr hoch - Rechtlich zwingend | Basis für alle Immobilientransaktionen | GBV, kant. Baugesetze | Aktiv |
| 3 | Grundbuchverordnung (GBV) | Regelt Organisation des Grundbuchs | Sehr hoch - Verfahrensvorschrift | Standardisierte Dokumentation | ZGB, eGRISDM | Aktiv |
| 4 | Verordnung über das Gebäude- und Wohnungsregister (VGWR) | Nationales Gebäuderegister | Sehr hoch - Registrierungspflicht | EGID-Vergabe, Meldepflichten | BBL Stammdaten | Aktiv |
| 5 | Raumplanungsgesetz (RPG) SR 700 | Raumordnung und Bauzonen | Hoch - Relevant | Alle Gebäude und Bauprojekte | RPV, kant. Baugesetze | Aktiv |
| 6 | Raumplanungsverordnung (RPV) SR 700.1 | Konkretisiert RPG | Hoch - Relevant | Zonenkonformität, Bauzonen | RPG, kant. Verordnungen | Aktiv |
| 7 | **BBL Governance und Weisungen** | | | | | |
| 8 | Weisungen CAD-Daten (Bau 281d) | Standardisierte Erfassung und Verwaltung digitaler Pläne | Sehr hoch - Standard für Plandaten | Einheitliche CAD-Datenstruktur, Planarchivierung | SAP RE-FX, GIS IMMO, Planverwaltungstool | Aktiv |
| 9 | Weisungen CAFM (Bau 282d) | Datenstandards für Computer Aided Facility Management | Sehr hoch - Bewirtschaftungsdaten | Strukturierte FM-Datenerfassung, Schnittstelle Planung-Betrieb | SAP PM, InterWatt, Wüest Dimensions | Aktiv |
| 10 | Vorgaben BIM | spezifische Building Information Modeling Standards | Sehr hoch - Digitalisierungsstrategie | BIM-Anforderungen für Projekte, LOD-Definitionen | IFC, Planverwaltungstool, SAP RE-FX | Aktiv |
| 11 | Weisungen Projekt- und Bewirtschaftungsakten (Bau 211d) | Standardisierte Objektdokumentation über Lebenszyklus | Sehr hoch - Dokumentationsgrundlage | Aktenstruktur, Übergabeprozesse, Archivierung | Aktenmanagement, SAP RE-FX | Aktiv |
| 12 | Weisungen pbFM (Bau 212d) | Projekt- und baubegleitendes Facility Management | Sehr hoch - Lifecycle-Integration | FM-Einbezug ab Planungsphase, Datenqualität | SAP PM, CAFM, Projektmanagement | Aktiv |
| 13 | KBOB-Richtlinien Nutzungszeiten | Standardisierte Lebenszyklen von Gebäuden und Bauteilen | Hoch - Portfolioplanung | Komponenten-Lebensdauer, Erneuerungszyklen | Wüest Dimensions, SAP PM | Aktiv |
| 14 | KBOB-Empfehlungen Nachhaltigkeit | Nachhaltigkeitsstandards für Bundesbauten | Hoch - Nachhaltigkeitsziele | Ökologische Anforderungen, Materialvorgaben | SNBS, Minergie, GEAK | Aktiv |
| 15 | **Fachanwendungen BBL Bauten / Bund** | | | | | |
| 16 | SAP RE-FX (Real Estate Flexible) | Kaufmännische Immobilienverwaltung | Sehr hoch - Kernsystem BBL | Stammdatenverwaltung, Mietmanagement | Alle Systeme | Aktiv |
| 17 | SAP PM (Plant Maintenance) | Instandhaltungsmanagement | Sehr hoch - TGA-Management | Störungsmeldungen, Wartung | SAP RE-FX, Mieterportal | Aktiv |
| 18 | BBL GIS IMMO (ESRI ArcGIS) | Geografisches Informationssystem | Mittel - GIS-Integration | Räumliche Visualisierung | SAP RE-FX, AV | Aktiv |
| 19 | InterWatt EDM | Energiedatenmanagement | Sehr hoch - Energiemonitoring | Zählerstrukturen, Verbrauch | SAP PM, IoT-Sensoren | Aktiv |
| 20 | Wüest Dimensions EHP | Erhaltungsplanung | Mittel | Langfristige Instandhaltung | SAP RE-FX, PM | Aktiv |
| 21 | BFS Gebäude- und Wohnungsstatistik | Nationale Gebäudeklassifikation | Sehr hoch - Gesetzliche Pflicht | Portfolioberichterstattung | GWR, AV | Aktiv |
| 22 | **Technische Standards** | | | | | |
| 23 | DM.01-AV-CH Datenmodell | Bundesmodell für Vermessungsdaten | Sehr hoch - Geodatengrundlage | Eigentumsverifizierung, Bauplanung | INTERLIS, WMS | Migration |
| 24 | eCH-0129 Objektwesen | Basisstandard Objektverwaltung | Sehr hoch - E-Gov Grundlage | Behördenkommunikation | Alle eCH-Domänen | Aktiv |
| 25 | eCH-0153 eGRISDM (Grundbuch) | Datenmodell elektronisches Grundbuch | Sehr hoch - EGRID-Standard | E-GRID, Terravis-Integration | EGRIS, kant. Systeme | Aktiv |
| 26 | Building Smart (IFC) ISO 16739 | Offener BIM-Datenaustausch | Sehr hoch - BIM-Strategie | Lebenszyklusmanagement | eBKP-H, KBOB | Aktiv |
| 27 | Real Estate Core (REC) | Ontologie für Smart Buildings | Hoch - Digital Twin Potenzial | IoT-Integration, Gebäudeautomation | Brick Schema, Azure DT | Aktiv |
| 28 | **Technische Standards - Fachspezifische Standards für Teilbereiche** | | | | | |
| 29 | VDI Richtlinien (z.B. VDI 3805) | Produktdatenaustausch TGA | Mitte - TGA-Standardisierung, VDI weniger relevant | HLK-Planung, Wartung | BIM, Herstellerkataloge | Aktiv |
| 30 | MINERGIE/BREEAM/LEED | Nachhaltigkeitszertifizierungen | Hoch - Minergie CH | Energieeffizienz, Zertifizierung | SNBS, MuKEn | Aktiv |
| 31 | SNBS Standard Nachhaltiges Bauen | Umfassender CH-Nachhaltigkeitsstandard | Sehr hoch - Bundesnachhaltigkeit | 35 Kriterien, Zertifizierung | Energiestrategie 2050 | Aktiv |
| 32 | **Technische Standards - Klassifikationen & Referenzen** | | | | | |
| 33 | SIA 416 | Schweizer Flächen-/Volumenstandard | Sehr hoch - Primärstandard CH | Arbeitsplatzdichte, Kostenallokation | SIA d0165, Bewertung | Aktiv |
| 34 | GEFMA 924 | Gebäudeklassifikation nach Nutzungsarten für FM | Sehr hoch - FM-Standard DACH | Portfoliostrukturierung, FM-Benchmarking | GEFMA 100, CRB OAG | Aktiv |
| 35 | SIA 102 | Leistungsmodell und Gebäudenutzungen | Sehr hoch - CH-Standard | Planungsgrundlage, Nutzungskategorien | SIA 416, SIA 112 | Aktiv |
| 36 | SIA 2040 | Effizienzpfad - Gebäudekategorien nach Nutzung | Hoch - Energiestandard | Nachhaltigkeitsziele, 2000-Watt-Gesellschaft | SIA 380, SIA 2024 | Aktiv |
| 37 | SIA 380/1 | Gebäudenutzungen für Energieberechnungen | Sehr hoch - Energienachweise | Energiebedarfsberechnung nach Nutzungstyp | MuKEn, GEAK | Aktiv |
| 38 | GEFMA 122 | Flächenarten im Facility Management | Hoch - Flächenklassifikation | Ergänzt SIA 416 für FM-Zwecke | DIN 277, SIA 416 | Aktiv |
| 39 | DIN 277:2021 | Deutsche Norm für Grundflächen und Rauminhalte | Hoch - Referenz für Flächenvergleiche | Benchmarking mit deutschen Behördenimmobilien | DIN 276, GEFMA 122 | Aktiv |
| 40 | RICS Code of Measuring Practice | UK-Standard für Flächenmessung (6. Edition) | Mittel - Internationale Referenz | Bei UK-Projekten oder internationalen Investoren | IPMS, GEA/NIA | Aktiv |
| 41 | IPMS Office | Spezifische IPMS für Bürogebäude | Hoch - Büroflächenstandard | Standardisierte Büroflächenberechnung | IPMS, BOMA | Aktiv |
| 42 | IPMS Residential | Spezifische IPMS für Wohngebäude | Mittel - Wohnflächenstandard | Internationale Wohnflächenvergleiche | IPMS, DIN 277 | Aktiv |
| 43 | BOMA Office Standard | Nordamerikanischer Büroflächenstandard | Mittel - US-Referenz | Bei US-Kooperationen oder Benchmarking | ANSI/BOMA Z65.1 | Aktiv |
| 44 | ISO 9836 | Internationale Norm für Flächenberechnung | Mittel - ISO-Referenz | Basis für nationale Standards | DIN 277, SIA 416 | Aktiv |
| 45 | CRB Objektarten-Gliederung OAG | Systematische Objektklassifikation | Sehr hoch - Portfoliostrukturierung | Benchmarking 2'600 Bundesbauten | eBKP-H, SIA 416 | Aktiv |
| 46 | eBKP-H Baukostenplan Hochbau | Elementbasierte Kostenplanung | Sehr hoch - KBOB-Pflichtstandard | Kostenplanung/-kontrolle | NPK, BIM, KBOB | Aktiv |
| 47 | Uniformat II | US-Elementklassifikation für Gebäudeelemente und -systeme | Mittel - Referenz für internationale Projekte | Bei Projekten mit US-Bezug oder internationalen Partnern | Masterformat, Omniclass | Aktiv |
| 48 | DIN 276 | Deutsche Kostengliederung für Bauprojekte | Hoch - Wichtig für grenznahe Projekte | Kostenvergleiche mit deutschen Projekten, Benchmarking | DIN 277 (Flächen), GAEB | Aktiv |
| 49 | Omniclass | Umfassendes nordamerikanisches Klassifikationssystem | Mittel - Internationale Referenz | Bei internationalen Ausschreibungen | Uniformat, Masterformat, IFC | Aktiv |
| 50 | Uniclass 2015 | UK-Klassifikationssystem für alle Bauphasen | Mittel - EU-Referenz | Projekte mit UK-Partnern, BIM Level 2 | IFC, COBie, NBS | Aktiv |
| 51 | Masterformat | Nordamerikanischer Standard für Bauspezifikationen | Mittel - Spezifikationsreferenz | Internationale Ausschreibungen | Uniformat II, Omniclass | Aktiv |
| 52 | CoClass | Schwedisches digitales Klassifikationssystem | Mittel - Nordeuropa-Referenz | Skandinavische Kooperationen | IFC, buildingSMART | Aktiv |
| 53 | NS 3451 | Norwegischer Tabellenstandard (Byggsøk) | Mittel - DACH-Alternative | Vergleich mit nordischen Standards | IFC, Statsbygg | Aktiv |
| 54 | CCS (Cuneco) | Dänisches Klassifikationssystem | Mittel - Digital Twin Referenz | Digitalisierungsprojekte | IFC, bSDD | Entwicklung |
| 55 | NL-SfB | Niederländisches Klassifikationssystem | Niedrig - Legacy System | Historische Referenz | Wird durch NL/SfB 2005 ersetzt | Auslaufend |
| 56 | ETIM | Europäisches Technisches Informationsmodell für Produkte | Hoch - Produktdaten | Technische Produktbeschaffung, E-Procurement | BMEcat, GS1 | Aktiv |
| 57 | GS1 BIM | Globale Standards für Produktidentifikation im Bauwesen | Hoch - Supply Chain | Asset Tracking, Wartung | GTIN, GLN, IFC | Entwicklung |
| 58 | **Externe Beispiel und Sontiges** | | | | | |
| 59 | Bauen Digital Schweiz | Schweizer BIM-Methodik | Hoch - Referenz, wird aber nicht weiterentwickelt | BIMcert, Use Cases, LOIN | KBOB, SIA, CRB | Aktiv |
| 60 | IBPDI (International Building Performance & Data Initiative) | Globaler Immobiliendatenstandard für Performance-Messung | Hoch - Digital Twin Potenzial | Dekarbonisierung, Benchmarking | CRREM, MS CDM | Entwicklung |
| 61 | BIMids | Standardisierte BIM-Identifikatoren für Bauteile | Hoch - BIM-Standardisierung (Dänemark) | Eindeutige Bauteil-IDs, Klassifikation | IFC, eBKP-H, NPK | Pilotierung |
| 62 | SBB Fachdomänenmodell | Datenmodell für Immobilienverwaltung der SBB | Hoch - Best Practice Referenz | Vergleichbare Ausgangslage als Bundesbetrieb | SAP, BIM, FM-Systeme | Aktiv |
| 63 | Stadt Zürich BIM/IMMO Standards | BIM- und Immobilienstandards der Stadt Zürich | Hoch - Best Practice öffentliche Hand | Vergleichbare Anforderungen für öffentliche Bauten | ArchiCAD, Revit, IFC | Aktiv |
| 64 | DPBB Universität Wuppertal | Forschungsprojekte zu digitalem Planen, Bauen und Betreiben | Mittel - Wissenschaftliche Referenz | Innovative Ansätze, Forschungserkenntnisse | Akademische Forschung | Forschung |
| 65 | buildingSMART Data Dictionary (bSDD) | Zentrale Datenbank für Bau-Klassifikationen und Eigenschaften | Hoch - Semantische Interoperabilität | Mapping zwischen verschiedenen Standards (eBKP-H, NPK, IFC) | IFC, nationale Standards, API | Aktiv |
| 66 | buildingSMART Use-Case Management | Framework für standardisierte BIM Use Cases | Mittel - Methodische Referenz | Prozessstandardisierung (mit Vorsicht zu nutzen) | IDM, MVD | Aktiv |

*Tabelle: Übersicht der relevanten Standards*

---

## 5. Wichtigste Standards im Detail (schrittweise Ergänzung)

Zur einheitlichen Klassifizierung der Begriffe und Standards werden folgende Kategorien verwendet:

- **Fachanwendung:** Operatives IT-System, Register oder Plattform mit definiertem Zweck, Datenhoheit und Schnittstellen.
- **Geschäftsprozess:** Strukturierte Abfolge von Aktivitäten zur Erreichung eines klar definierten fachlichen Ziels, inkl. Rollen und Ergebnissen.
- **Geschäftsobjekt:** Fachlich abgegrenzte Entität mit eindeutiger Identität über ihren Lebenszyklus (z. B. Identifikator, Zustände).
- **Geschäftsobjekttyp:** Spezialisierung oder Ausprägung eines Geschäftsobjekts mit zusätzlichen Merkmalen oder Regeln.
- **Dokument:** Informationsträger zur Dokumentation, Kommunikation oder Nachweisführung, analog oder digital, mit Metadaten.
- **Attribut:** Eigenschaft oder Merkmal eines Geschäftsobjekts, fachlich definiert und typisiert.
- **Fachbegriff:** Begriff, Definition oder Klassifikation mit fachlicher Bedeutung ohne eigene Objektidentität.
- **Relation:** Fachlich begründete Beziehung zwischen Geschäftsobjekten (z. B. Zugehörigkeit, Referenz, Abhängigkeit), inklusive Kardinalitäten und Regeln.

### 5.1 Schweizerisches Zivilgesetzbuch (ZGB), Art. 655-712

- **Priorität:** A (Sehr hoch)
- **Gesetzliche Grundlage:** https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de

**Beschreibung:** Das Schweizerische Zivilgesetzbuch bildet die fundamentale Rechtsgrundlage für alle Eigentums- und Immobilienrechte in der Schweiz. Die Artikel 655-712 regeln spezifisch das Grundeigentum, definieren verschiedene Eigentumsformen und legen die rechtlichen Rahmenbedingungen für Immobilientransaktionen fest.

**Relevanz für BBL:** Als Bundesbehörde muss das BBL alle Immobiliendaten rechtskonform strukturieren. Das ZGB definiert die rechtlichen Grundkategorien, die in der Architektonischen Sicht abgebildet werden müssen: Grundeigentum, Stockwerkeigentum, Baurechte und weitere dingliche Rechte.

| Nr | Begriff | Kategorie | Beschreibung | Relevanz BBL |
|----|---------|-----------|--------------|--------------|
| 1 | Grundstück | Geschäftsobjekt | Räumlich abgrenzbare Bodeneinheit mit eigenständigen Eigentumsrechten (Art. 655 ZGB). Kann bebaut oder unbebaut sein. | Sehr hoch - Grundlegende Entität für alle Immobilien. Basis für Flächenmanagement und rechtliche Zuordnung. |
| 2 | Gebäude | Geschäftsobjekt | Bauwerk, das fest mit dem Boden verbunden ist und als Bestandteil des Grundeigentums gilt (Art. 667 ZGB). | Sehr hoch - Zentrale bauliche Einheit für Immobilienmanagement. Objekt für FM, Bewertung und Nutzung. |
| 3 | Eigentümer | Geschäftsobjekt | Natürliche oder juristische Person mit Eigentumsrechten an einem Grundstück (Art. 655 ZGB). | Sehr hoch - Rechtliche Zuordnung von Immobilien. Basis für Verträge und Bewirtschaftung. |
| 4 | Stockwerkeigentum | Geschäftsobjekt | Besondere Form des Miteigentums mit ausschliesslichen Nutzungsrechten an bestimmten Räumen (Art. 712a-712t ZGB). | Hoch - Relevant für gemischte Immobiliennutzung und Eigentumsverhältnisse in Liegenschaften. |
| 5 | Baurecht | Geschäftsobjekt | Dingliches Recht, auf oder unter der Bodenfläche eines fremden Grundstücks ein Bauwerk zu errichten oder zu unterhalten (Art. 779-779l ZGB). | Hoch - Wichtig für komplexe Eigentumsverhältnisse und langfristige Nutzungsverträge bei Projekten. |
| 6 | Grundeigentum | Fachbegriff | Rechtsinstitut, das dem Eigentümer die Befugnis gibt, über eine Sache nach seinem Belieben zu verfügen (Art. 641, 655 ZGB). | Sehr hoch - Fundamentales Rechtskonzept für alle Immobilienrechte und -transaktionen. |
| 7 | Miteigentum | Fachbegriff | Form des Eigentums, bei der mehreren Personen eine Sache ungeteilt zusteht (Art. 646 ZGB). | Hoch - Relevant für gemeinsame Immobiliennutzung und Verwaltungsgemeinschaften. |
| 8 | Gesamteigentum | Fachbegriff | Eigentumsform bei Personengemeinschaften, wo allen Beteiligten die Sache ungeteilt zusteht (Art. 652 ZGB). | Mittel - Spezifische Eigentumsform für bestimmte Kooperationsprojekte. |
| 9 | Dienstbarkeit | Fachbegriff | Beschränkung des Eigentums zugunsten eines berechtigten Grundstücks oder einer bestimmten Person (Art. 730-792 ZGB). | Hoch - Wichtig für Zugangsrechte, Leitungsrechte und Nutzungsbeschränkungen bei Immobilien. |
| 10 | Grundlast | Fachbegriff | Dingliches Recht auf wiederkehrende Leistungen aus einem Grundstück (Art. 782-792 ZGB). | Mittel - Relevant für spezielle Finanzierungsmodelle und langfristige Verpflichtungen. |
| 11 | Grundpfand | Fachbegriff | Pfandrecht an Grundstücken zur Sicherung von Forderungen (Art. 793-883 ZGB). | Hoch - Wichtig für Finanzierung, Sicherheiten und Kreditmanagement bei Immobilien. |
| 12 | Eigentumsverhältnis | Attribut | Rechtliche Zuordnung und Art des Eigentums an einem Grundstück oder Gebäude. | Sehr hoch - Zentrale Information für rechtskonforme Datenhaltung und Verwaltung. |
| 13 | Anteilsquote | Attribut | Numerischer Wert zur Bestimmung des Eigentumsanteils bei Miteigentum oder Stockwerkeigentum. | Hoch - Notwendig für Kostenzuteilung und Nutzungsrechte bei geteilten Immobilien. |
| 14 | Verfügungsberechtigung | Attribut | Rechtliche Befugnis, über ein Grundstück oder Gebäude zu verfügen (veräussern, belasten, nutzen). | Sehr hoch - Grundlage für alle Geschäftsentscheidungen bezüglich Immobilien. |
| 15 | Nutzungsrecht | Attribut | Berechtigung zur Nutzung eines Grundstücks oder Gebäudes, auch ohne Eigentumsrecht. | Hoch - Relevant für Miet-, Pacht- und Nutzungsverträge in Immobilien. |
| 16 | Belastungsgrenze | Attribut | Maximaler Wert, bis zu dem ein Grundstück mit Grundpfandrechten belastet werden kann. | Mittel - Wichtig für Finanzplanung und Risikobewertung bei Immobilien. |
| 17 | Grundbucheintrag | Attribut | Amtliche Registrierung von Eigentumsrechten, Belastungen und Beschränkungen. | Sehr hoch - Rechtliche Basis für eindeutige Identifikation und Rechtssicherheit. |

*Tabelle: Begriffe Schweizerisches Zivilgesetzbuch*

### 5.2 Grundbuchverordnung (GBV)

- **Priorität:** A (Sehr hoch)
- **Gesetzliche Grundlage:** https://www.fedlex.admin.ch/eli/oc/2021/918/de
- **Fachanwendung:** https://www.cadastre.ch/de/oereb-kataster

**Beschreibung:** Die Grundbuchverordnung konkretisiert die praktische Führung des Grundbuchs und definiert die administrativen Prozesse für die Registrierung von Grundstücken, Gebäuden und dinglichen Rechten. Sie legt die Standards für die amtliche Dokumentation von Eigentumsverhältnissen fest.

**Relevanz für BBL:** Die GBV definiert die offiziellen Identifikationssysteme und Datenstrukturen, die für die eindeutige Referenzierung von Immobilien unerlässlich sind. Sie gewährleistet die Rechtskonformität der Datenmodellierung und die Kompatibilität mit behördlichen Systemen.

| Nr | Begriff | Kategorie | Beschreibung | Relevanz BBL |
|----|---------|-----------|--------------|--------------|
| 1 | Hauptbuch | Fachanwendung | Zentrales Register des Grundbuchs, das alle rechtswirksamen Einträge zu Grundstücken, Eigentümern und Rechten enthält (informatisiert oder Papier). | Sehr hoch - Primäre Datenquelle für alle rechtlichen Informationen zu Immobilien. Basis für Eigentumsprüfung und Rechtssicherheit. |
| 2 | Personenidentifikationsregister | Geschäftsobjekt | Register des informatisierten Grundbuchs zur Zuordnung von AHV-Nummern zu natürlichen Personen mit Grundstücksrechten (Art. 23a GBV). | Sehr hoch - Ermöglicht eindeutige Personenidentifikation für Vertragspartner und Eigentümer. Basis für automatisierten Datenaustausch. |
| 3 | Grundbuchamt | Geschäftsobjekt | Kantonale Behörde, die für die Führung des Grundbuchs und die Registrierung von Rechtsgeschäften zuständig ist. | Hoch - Zentraler Partner für alle grundbuchrelevanten Geschäfte und Rechtsänderungen. |
| 4 | Grundstücksuchdienst | Geschäftsobjekt | Vom EGBA betriebener elektronischer Dienst für landesweite Suche nach Grundstücksrechten berechtigter Behörden (Art. 34b GBV). | Hoch - Ermöglicht BBL als Bundesbehörde die schweizweite Suche nach Immobilienrechten für behördliche Aufgaben. |
| 5 | Tagebuch | Geschäftsobjekt | Chronologisches Register aller Anmeldungen und Bearbeitungsschritte im Grundbuch. | Mittel - Relevant für Nachverfolgung von Transaktionen und Rechtssicherheit bei laufenden Verfahren. |
| 6 | Hilfsregister | Geschäftsobjekt | Ergänzende Register zur systematischen Erfassung von Personen-, Gläubiger- und anderen Hilfsdaten (Art. 13 GBV). | Mittel - Unterstützende Datenstrukturen für effiziente Verwaltung von Immobiliendaten. |
| 7 | Informatisiertes Grundbuch | Fachbegriff | Elektronische Form der Grundbuchführung mit digitalen Registern und automatisierten Prozessen. | Sehr hoch - Moderne Grundlage für digitale Integration der Immobilienverwaltung und E-Government-Prozesse. |
| 8 | Rechtswirksame Daten | Fachbegriff | Amtlich registrierte und rechtlich verbindliche Informationen im Hauptbuch (Art. 34c GBV). | Sehr hoch - Definiert die rechtliche Qualität der Daten, auf die sich Entscheidungen stützen können. |
| 9 | Landesweite Grundstücksuche | Fachbegriff | Elektronisches Verfahren für berechtigte Behörden zum Auffinden von Grundstücksrechten in der ganzen Schweiz (Art. 34a GBV). | Hoch - Strategisches Instrument für BBL zur schweizweiten Immobilienanalyse und behördlichen Aufgabenerfüllung. |
| 10 | Pseudonymisierte Form | Fachbegriff | Datenschutzkonforme Verschleierung von Personendaten, die Treffer-Erkennung ohne vollständigen Personenbezug ermöglicht (Art. 34b GBV). | Hoch - Wichtig für datenschutzkonforme Nutzung von Grundbuchdaten durch BBL bei systematischen Abfragen. |
| 11 | Berechtigte Behörden | Fachbegriff | Bund, Kantone und Gemeinden, die zur Erfüllung gesetzlicher Aufgaben Zugang zum Grundstücksuchdienst benötigen (Art. 34a GBV). | Sehr hoch - BBL als Bundesbehörde gehört zu diesem Kreis und kann dadurch schweizweite Immobilienabfragen durchführen. |
| 12 | Zugriffsberechtigung | Fachbegriff | Formelle Berechtigung von Behördenmitarbeitern für den Zugang zum Grundstücksuchdienst nach begründetem Gesuch (Art. 34d GBV). | Hoch - Reguliert den kontrollierten Zugang der Mitarbeiter zu schweizweiten Grundbuchdaten. |
| 13 | AHV-Nummer | Attribut | Eindeutige Personenkennung, die im Personenidentifikationsregister den Grundbuchpersonen zugeordnet wird (Art. 23a GBV). | Sehr hoch - Ermöglicht eindeutige Identifikation von Vertragspartnern und automatisierte Datenverknüpfung zwischen Behördensystemen. |
| 14 | Status der Zuordnung | Attribut | Kennzeichnung des Bearbeitungsstands der AHV-Nummern-Zuordnung (erfolgreich, ausstehend, nicht möglich) (Art. 23a GBV). | Hoch - Wichtig für BBL zur Bewertung der Datenqualität und Vollständigkeit bei Personenidentifikation. |
| 15 | Grundstücksbezeichnung | Attribut | Amtliche Kennzeichnung und Beschreibung von Grundstücken im Hauptbuch (Art. 34e GBV). | Sehr hoch - Eindeutige Referenzierung aller Grundstücke für Verwaltung und Rechtsgeschäfte. |
| 16 | Rechtsbeschreibung | Attribut | Kategorisierung der Art des Rechts (Eigentum, Dienstbarkeit, Grundlast, Grundpfandrecht, vorgemerktes Recht) (Art. 34e GBV). | Sehr hoch - Zentral für die rechtliche Einordnung und Bewertung der Immobilienrechte. |
| 17 | Suchkriterien | Attribut | Zulässige Parameter für die Abfrage des Grundstücksuchdienstes (Personalien nach Art. 90 ZGB, AHV-Nummer) (Art. 34e GBV). | Hoch - Definiert die technischen Möglichkeiten für Recherchen im schweizweiten Grundbuchbestand. |
| 18 | Protokollierung | Attribut | Automatische Aufzeichnung aller Abfragen mit Behörde, Mitarbeiter, Suchkriterien, Zeitpunkt und Resultaten (Art. 34f GBV). | Hoch - Gewährleistet Nachvollziehbarkeit und Rechtmässigkeit der Grundbuchnutzung. Compliance-relevant. |
| 19 | Gebührenbetrag | Attribut | Jährliche Kosten für die Nutzung des Grundstücksuchdienstes, berechnet nach Anzahl Abfragen (max. 2 CHF/Abfrage) (Art. 34i GBV). | Mittel - Budgetrelevant für BBL bei intensiver Nutzung der landesweiten Grundstücksuche. |
| 20 | Technische Referenz | Attribut | Eindeutige IT-Identifikatoren für Verknüpfungen zwischen Hauptbuch, Hilfsregistern und Datenquellen (Art. 23a GBV). | Hoch - Technische Basis für die Integration der IT-Systeme mit dem Grundbuchsystem. |
| 21 | Bewilligungspflicht | Attribut | Erforderliche EGBA-Genehmigung für die Nutzung von Schnittstellen zum Grundstücksuchdienst (Art. 34b GBV). | Hoch - Regulatorische Voraussetzung für automatisierte Systeme bei der Grundbuchanbindung. |
| 22 | Aufbewahrungsfristen | Attribut | Zweijährige Speicherung der Protokolle für Zugriffskontrolle und Gebührenerhebung (Art. 34f GBV). | Mittel - Relevant für Compliance und Nachweis rechtmässiger Grundbuchnutzung. |

*Tabelle: Begriffe Grundbuchverordnung*

### 5.3 Verordnung über das Gebäude- und Wohnungsregister (VGWR)

- **Priorität:** A (Sehr hoch)
- **Gesetzliche Grundlage:** https://www.fedlex.admin.ch/eli/cc/2017/376/de
- **Fachanwendung:** https://www.housing-stat.ch/

**Beschreibung:** Die VGWR regelt die schweizweit einheitliche Erfassung, Identifikation und Verwaltung von Gebäuden und Wohnungen. Sie definiert die amtlichen Identifikatoren EGID (Eidgenössischer Gebäudeidentifikator) und EWID (Eidgenössischer Wohnungsidentifikator) sowie die erforderlichen Attribute.

**Relevanz für BBL:** Das GWR ist die zentrale Referenzdatenbank für alle Gebäude in der Schweiz. Für das BBL ist die VGWR-konforme Datenstruktur unerlässlich für die Integration mit anderen Behördensystemen und die rechtskonforme Führung der Gebäudedaten.

| Nr | Begriff | Kategorie | Beschreibung | Relevanz BBL |
|----|---------|-----------|--------------|--------------|
| 1 | Eidgenössisches Gebäude- und Wohnungsregister (GWR) | Fachanwendung | Nationales Informationssystem für alle Gebäude und Wohnungen der Schweiz, geführt vom BFS für Statistik-, Forschungs- und Planungszwecke sowie gesetzliche Aufgaben. | Sehr hoch - Zentrale Referenzdatenbank für alle Immobilien. Grundlage für eindeutige Identifikation und Integration mit anderen Behördensystemen. |
| 2 | Gebäude | Geschäftsobjekt | Bauwerke aller Art (seit 2017: Vollregister für alle Gebäude, nicht nur Wohnbauten) mit schweizweit eindeutiger EGID-Identifikation. | Sehr hoch - Kernentität der Immobilienverwaltung. Jedes Gebäude muss im GWR erfasst und mit EGID identifiziert sein. |
| 3 | Wohnung | Geschäftsobjekt | Gesamtheit der Räume, die eine bauliche Einheit bilden und einen eigenen Zugang haben, mit eindeutiger EWID-Identifikation. | Sehr hoch - Grundeinheit für Mietermanagement und Flächenverwaltung bei Wohnimmobilien. |
| 4 | Bauprojekt | Geschäftsobjekt | Objekt, für das ein Baubewilligungsgesuch nach RPG erforderlich ist, mit strukturierter Nachführung im GWR von der Bewilligung bis zum Abschluss. | Sehr hoch - Zentral für Projektmanagement und -controlling. Ermöglicht Tracking von Bauvorhaben über gesamten Lebenszyklus. |
| 5 | Gebäudeeingang | Geschäftsobjekt | Physischer Zugang zu einem Gebäude mit eindeutiger EDID-Identifikation, an den Wohnungen zwingend gebunden sind. | Hoch - Relevant für Adressierung, Zugangsverwaltung und logistische Prozesse bei Immobilien. |
| 6 | Kantonale GWR-Koordinationsstelle | Geschäftsobjekt | Von den Kantonen bezeichnete Stelle zur Koordination zwischen BFS, Kantonen und Gemeinden bei der GWR-Nachführung (Art. 5 VGWR). | Hoch - Wichtiger Partner für BBL bei kantonsspezifischen GWR-Fragen und Datenabstimmung. |
| 7 | Vollregister | Fachbegriff | Seit 1. Juli 2017: Erfassung aller Gebäude unabhängig von der Nutzung (nicht nur Wohnbauten), wodurch EGID schweizweit eindeutig und vollständig wird. | Sehr hoch - Strategische Grundlage für vollständige Immobilienerfassung und -verwaltung aller Gebäudetypen. |
| 8 | Nachführungspflicht | Fachbegriff | Quartalsweise Pflicht der Gemeinden zur Aktualisierung aller GWR-Daten innerhalb 30 Tagen nach Quartalsende (Art. 10 VGWR). | Hoch - Gewährleistet Aktualität der Immobiliendaten und Compliance mit nationalen Standards. |
| 9 | Merkmalskatalog | Fachbegriff | Vom BFS veröffentlichtes Referenzwerk mit allen GWR-Merkmalen, Definitionen, Nomenklaturen und Kodierungen (aktuell Version 4.2). | Sehr hoch - Verbindliche Grundlage für Datenmodellierung und Systemintegration. Gewährleistet schweizweite Kompatibilität. |
| 10 | Sekundärdatenquellen | Fachbegriff | Zusätzliche Datenquellen (z.B. Energieregister), die das BFS zur Qualitätssteigerung des GWR nutzen kann (Art. 9 Abs. 2 VGWR). | Hoch - Ermöglicht BBL automatisierte Datenanreicherung für Performance-Management und Nachhaltigkeitsziele. |
| 11 | Registerharmonisierung | Fachbegriff | Abstimmung zwischen GWR und anderen amtlichen Registern (Einwohnerregister, Grundbuch, etc.) über eindeutige Identifikatoren. | Sehr hoch - Basis für Integration in schweizerisches E-Government-System und behördenübergreifende Prozesse. |
| 12 | Qualitätsprüfungen | Fachbegriff | Systematische Kontrollen der GWR-Datenqualität (CheckCH, CheckGWR) zur Bereinigung von Differenzen zwischen verschiedenen Registern. | Hoch - Sichert Datenqualität für Entscheidungen und automatisierte Prozesse. |
| 13 | EGID (Eidgenössischer Gebäudeidentifikator) | Attribut | Schweizweit eindeutige, unveränderliche Nummer für jedes Gebäude, vergeben bei der Ersterfassung im GWR. | Sehr hoch - Primärer Schlüssel für alle Gebäudedaten. Basis für System-Integration und Datenaustausch mit Behörden und Partnern. |
| 14 | EWID (Eidgenössischer Wohnungsidentifikator) | Attribut | Schweizweit eindeutige Nummer für jede Wohnung, bleibt bei Umnutzungen und Mieterwechseln unverändert. | Sehr hoch - Zentral für Mietermanagement und Wohnungsadministration. Ermöglicht lebenslange Nachverfolgung von Wohneinheiten. |
| 15 | EDID (Eidgenössischer Gebäudeeingangsidentifikator) | Attribut | Eindeutige Identifikation von Gebäudeeingängen, an die Wohnungen zwingend gebunden sind. | Hoch - Relevant für Adressverwaltung und physische Zugangskontrolle bei komplexen Gebäudestrukturen. |
| 16 | Standortkoordinaten | Attribut | Metrische Gebäudekoordinaten für exakte geografische Lokalisierung nach schweizerischem Koordinatensystem. | Sehr hoch - Fundamental für GIS-basierte Anwendungen, Facility Management und Notfallplanung. |
| 17 | Gebäudekategorie | Attribut | Klassifikation nach Nutzungsart (Wohngebäude, Anstaltsgebäude, Hotelgebäude, Bürogebäude, etc.) gemäss GWR-Nomenklatur. | Sehr hoch - Basis für Portfoliomanagement, Kostenrechnung und strategische Immobilienplanung nach Gebäudetypen. |
| 18 | Baujahr/Bauperiode | Attribut | Zeitliche Einordnung der Gebäudeerstellung für statistische und planerische Zwecke. | Hoch - Wichtig für Instandhaltungsplanung, Energieeffizienz-Bewertung und Sanierungsstrategien. |
| 19 | Anzahl Geschosse | Attribut | Vertikale Gliederung des Gebäudes in ober- und unterirdische Geschosse. | Hoch - Relevant für Flächenmanagement, Nutzungsplanung und Sicherheitskonzepte. |
| 20 | Energiemerkmale | Attribut | Angaben zu Heizsystem, Warmwasseraufbereitung und Hauptenergiequelle für Nachhaltigkeitsmanagement. | Sehr hoch - Zentral für Nachhaltigkeitsziele, CO2-Bilanzierung und Energieeffizienz-Optimierung. |
| 21 | Wohnungsfläche | Attribut | Flächenangaben der Wohnung in Quadratmetern für statistische und administrative Zwecke. | Sehr hoch - Grundlage für Mietkalkulationen, Flächenmanagement und Kostenallokation. |
| 22 | Anzahl Zimmer | Attribut | Zimmeranzahl der Wohnung für statistische Auswertungen und Wohnungsklassifikation. | Hoch - Relevant für Mietermanagement und bedarfsgerechte Wohnraumzuteilung. |
| 23 | Standardisierte Adresse | Attribut | Nach SNV-Norm 612040 strukturierte und geokodierte Adressangaben für einheitliche Adressierung. | Sehr hoch - Basis für Kommunikation, Logistik und Integration mit Postdiensten und Navigationssystemen. |
| 24 | Projektstatus | Attribut | Aktueller Bearbeitungsstand des Bauprojekts (Gesuch eingereicht, bewilligt, Baubeginn, Abschluss, sistiert, etc.). | Sehr hoch - Zentral für Projektcontrolling und -steuerung. Ermöglicht automatisierte Fortschrittsverfolgung. |
| 25 | Baukosten | Attribut | Gesamtkosten des Bauprojekts ohne Grundstückskosten und Subventionen für statistische Zwecke. | Hoch - Wichtig für Budgetplanung, Kostenbenchmarking und Investitionscontrolling. |
| 26 | Amtliche Wohnungsnummer (aWN) | Attribut | Kantonale/kommunale Wohnungsnummer (z.B. im Kanton Zürich zwingend bei Mehrfamilienhäusern). | Hoch - Relevant für Immobilien in entsprechenden Kantonen für lokale Verwaltungsprozesse. |

*Tabelle: Begriffe in der Verordnung über das Gebäude- und Wohnungsregister*

![Datenmodell und Beschreibung der Entitäten im GWR](assets/architektonische-sicht_gwr-datenmodell.png)

*Bild: Datenmodell und Beschreibung der Entitäten im GWR*

### 5.4 DM.01-AV-CH Datenmodell der amtlichen Vermessung

- **Priorität:** A (Sehr hoch)
- **Dokumentation:** https://www.cadastre-manual.admin.ch/de/datenmodell-der-amtlichen-vermessung-dm01-av-ch

**Beschreibung:** Das DM.01-AV-CH ist das offizielle Bundesmodell für die strukturierte Erfassung, Verwaltung und Abgabe von Daten der amtlichen Vermessung. Es basiert auf thematischen Informationsebenen und wird per 31.12.2027 durch das neue DMAV-Modell abgelöst.

**Relevanz für BBL:** Als Grundlage aller georeferenzierten Daten in der Schweiz ist das DM.01-AV-CH für die Architektonische Sicht unverzichtbar. Es liefert die präzisen geometrischen Grundlagen für Grundstücke, Gebäudepositionen und räumliche Bezüge aller Immobilien.

**Übersicht relevanter Geschäftsobjekte (für die Architektonische Sicht):**

- **Liegenschaften:** Grundstücke mit exakter geometrischer Abgrenzung
- **Gebäudeadressen:** Georeferenzierte Adressdaten
- **Bodenbedeckung:** Versiegelte und unversiegelte Flächen
- **Einzelobjekte:** Bauwerke, technische Anlagen, Denkmäler
- **Fixpunkte:** Referenzpunkte für die Vermessung
- **Administrative Einteilungen:** Gemeinde- und Kantonsgrenzen
- **Rohrleitungen:** Unterirdische Infrastrukturen

<!-- TODO: Vollständige Tabelle der DM.01-AV-CH Begriffe hier einfügen -->

![Darstellung der Entitäten als Schichten](assets/architektonische-sicht_av-schichten.png)

*Bild Links: Darstellung der Entitäten als Schichten*

### 5.5 eCH-0129 Objektwesen

- **Priorität:** A (Sehr hoch)
- **Quelle:** http://ech.ch/de/ech/ech-0129/6.0.0

**Beschreibung:** Der eCH-0129 ist der grundlegende Standard für das Objektwesen in der Schweiz. Er definiert ein übergreifendes Austauschdatenmodell und bildet die Basis für alle domänenspezifischen Objektwesen-Standards (Bauwesen, Amtliche Vermessung, Versicherungen, Grundbuch).

**Relevanz für BBL:** Als zentraler E-Government-Standard für Objektdaten ermöglicht eCH-0129 dem BBL die standardkonforme elektronische Kommunikation mit anderen Behörden und die interoperable Verwaltung der Immobiliendaten über Systemgrenzen hinweg.

<!-- TODO: Vollständige Tabelle der eCH-0129 Begriffe hier einfügen -->

![Austauschmodell eCH-0129 Objektwesen](assets/architektonische-sicht_ech0129-austauschmodell.png)

*Bild: Austauschmodell eCH-0129 Objektwesen*

### 5.6 eCH-0153 eGRISDM (Grundbuch)

- **Priorität:** A (Sehr hoch)

**Beschreibung:** Das eGRISDM ist ein konzeptionelles Datenmodell, welches eine einheitliche Struktur der Grundbuchdaten im elektronischen Grundbuch gewährleistet. Es beschreibt die im Grundbuchsystem zu haltenden und zu verwaltenden Daten. Das Dokument ergänzt die formale Beschreibung des Datenmodells, die Bestandteil der Technischen Grundbuchverordnung (TGBV) ist. Es definiert die amtlichen Identifikatoren EGRID, EREID, EGBPID und EGBTBID für Grundstücke, Rechte, Personen und Anmeldungen.

**Relevanz für BBL:** Die Grundbuchverordnung (GBV), deren formales Modell das eGRISDM ist, definiert die offiziellen Identifikationssysteme und Datenstrukturen, die für die eindeutige Referenzierung von Immobilien unerlässlich sind. Es gewährleistet die Rechtskonformität der Datenmodellierung und die Kompatibilität mit behördlichen Systemen. Das eGRISDM ist die Basis für die rechtliche Verankerung der Immobiliendaten und direkt relevant für das Geschäftsobjekt "Grundstück".

<!-- TODO: Vollständige Tabelle der eGRISDM Begriffe hier einfügen -->

### 5.7 Bauen Digital Schweiz (Datenfeldkataloge)

- **Priorität:** A (Sehr hoch)
- **Dokumentation:** https://bim2fm.bauen-digital.ch/

**Beschreibung:** Bauen Digital Schweiz ist die zentrale Initiative zur Digitalisierung im Schweizer Bauwesen. Sie entwickelt Datenfeldkataloge und Richtlinien, die spezifisch auf Schweizer Gesetze, Normen und Geschäftsprozesse zugeschnitten sind, insbesondere in Bezug auf eBKP-H und NPK.

**Relevanz für BBL:** Die Datenfeldkataloge definieren die fachspezifischen Attribute und deren Bedeutung für den gesamten Gebäudelebenszyklus. Sie sind essentiell für die schweizerkonforme Digitalisierung der Bauprozesse und die Integration mit der nationalen Baubranche.

**Übersicht relevanter Geschäftsobjekte (für die Architektonische Sicht):**

- **Areal:** Übergeordnete räumliche Einheit für mehrere Grundstücke/Gebäude
- **Gebäude:** Physische Bauwerke mit schweizerischen Klassifikationen
- **Geschoss:** Horizontale Gliederungsebenen mit spezifischen Attributen
- **Raum:** Funktional definierte Bereiche nach Schweizer Standards
- **Zone:** Klimazonen, Brandabschnitte, Sicherheitszonen
- **Anlage (technisch):** HLK-, Elektro-, Sanitäranlagen nach Schweizer Normen
- **Bauteil:** Physische Elemente mit eBKP-H-Klassifikation
- **Komponente:** Elementare Bausteine mit NPK-Referenzierung

![Beispiel Entitäten Bauen Digital Schweiz](assets/architektonische-sicht_bauen-digital-entitaeten.png)

*Bild: Beispiel Entitäten*

### 5.8 Building Smart (IFC / ISO 16739)

- **Priorität:** A (Sehr hoch)
- **Dokumentation:** https://ifc43-docs.standards.buildingsmart.org/

**Beschreibung:** Building Smart International entwickelt offene Standards für Building Information Modeling (BIM). IFC (Industry Foundation Classes) ist das international führende Datenmodell für den herstellerneutralen Austausch von BIM-Daten und bildet die Grundlage für die digitale Zusammenarbeit im Bauwesen.

**Relevanz für BBL:** IFC ist der de-facto Standard für offene Bauwerksdaten und fundamental für die digitale Bauabwicklung und das Facility Management. Es ermöglicht dem BBL die herstellerunabhängige Nutzung von BIM-Daten über den gesamten Immobilienlebenszyklus.

<!-- TODO: Vollständige Tabelle der IFC Begriffe hier einfügen -->

![IFC Räumliche Hierarchie](assets/Architektonische%20Sicht/architektonische-sicht_01_ifc-hierarchie.png)

*Bild: IFC Räumliche Hierarchie (vereinfacht)*

### 5.9 IBPDI (International Building Performance and Data Initiative)

- **Priorität:** A (Sehr hoch)
- **Dokumentation:**
  - Webseite: https://ibpdi.org/
  - GitHub: https://github.com/ibpdi/cdm

**Beschreibung:** Die IBPDI standardisiert Gebäudedaten zur Messung und Verbesserung der Gebäudeeffizienz über den gesamten Lebenszyklus. Sie definiert Datenpunkte und Metadaten für Performance-Messung, Energieverbrauch und Nachhaltigkeitsbewertung.

**Relevanz für BBL:** IBPDI unterstützt die Nachhaltigkeitsziele des Bundes durch standardisierte Performance-Erfassung. Es ermöglicht dem BBL die systematische Überwachung und Optimierung der Gebäudeeffizienz sowie die Erfüllung von Nachhaltigkeitsanforderungen.

<!-- TODO: Vollständige Tabelle der IBPDI Begriffe hier einfügen -->

### 5.10 Real Estate Core (REC)

- **Priorität:** A (Sehr hoch)
- **Dokumentation:**
  - Webseite: https://www.realestatecore.io/
  - Übersicht Ontologie: https://dev.realestatecore.io/ontology/
  - Dokumentation Guides: https://dev.realestatecore.io/docs/guides/

**Beschreibung:** Real Estate Core ist eine offene, semantische Ontologie für die Immobilienbranche, die als gemeinsame Sprache für Smart Buildings fungiert. REC ist modular aufgebaut und zielt darauf ab, bestehende Standards zu überbrücken anstatt einen neuen Standard zu schaffen. Die Ontologie nutzt Semantic Web-Technologien kombiniert mit einem geschäftsnutzen-orientierten Ansatz und wurde speziell für Digital Twins und IoT-basierte Gebäudemanagementsysteme entwickelt.

**Relevanz für BBL:** Als umfassende, semantische Ontologie für die Immobilienbranche ist Real Estate Core für das BBL von strategischer Bedeutung. REC ermöglicht die standardkonforme semantische Modellierung von Immobiliendaten, die Integration verschiedener Systeme über deren gesamten Lebenszyklus und bereitet die Immobilien für die Interaktion mit Smart City-Infrastrukturen vor. Besonders relevant ist die Kompatibilität mit anderen Standards wie IFC, Brick Schema und BOT.

**Übersicht relevanter Geschäftsobjekte (für die Architektonische Sicht):**

- **Space:** Räumliche Strukturen (Region, Site, Building, Level, Room)
- **Asset:** Anlagen und Ausstattung (ArchitecturalAsset, Equipment, Furniture)
- **BuildingElement:** Bauliche Komponenten (Facade, Wall, Roof, Slab)
- **Collection:** Administrative Gruppierungen (RealEstate, Campus, Portfolio)
- **Point:** Datenschnittstellen (Sensor, Command, Setpoint)
- **Agent:** Akteure (Person, Organization, Department)
- **Information:** Zusatzinformationen (Geometry, PostalAddress, Document)

<!-- TODO: Vollständige Tabelle der REC Begriffe hier einfügen -->

![Übersicht Real Estate Core Entitäten](assets/architektonische-sicht_rec-struktur.png)

*Bild: Übersicht Real Estate Core Entitäten*

### 5.11 SIA 416 (Flächen und Volumen von Gebäuden)

- **Priorität:** A (Sehr hoch)
- **Original Dokument:** https://object.gever.admin.ch:443/web/?ObjectToOpenID=%24ActaNovaDocument%7c8A7A3289-B10E-40EB-8E5B-3CC7A9F7A0CC&TenantID=169

**Beschreibung:** Die Norm SIA 416:2003 definiert die Systematik zur Berechnung von Flächen und Volumina von Gebäuden in der Schweiz. Sie gilt für die Definition von Flächen und Volumina bestehender und projektierter Gebäude sowie deren Umgebungsflächen. Die Norm vereinheitlicht die Berechnung von Grundstücks- und Gebäudeflächen und deren Teilen sowie der daraus abgeleiteten Gebäudevolumen. Sie dient als Basis für Flächen- und Volumennachweise, Variantenvergleiche, Wirtschaftlichkeitsüberlegungen und statistische Erfassungen.

**Relevanz für BBL:** Die SIA 416 ist der primäre Standard für Flächen- und Volumenberechnungen in der Schweiz und somit unerlässlich für das BBL. Sie ergänzt die Definitionen von "Gebäude", "Geschoss" und "Raum" durch messbare Attribute, welche die Grundlage für das Flächenmanagement bilden.

| Nr | Begriff (Original) | Kategorie | Beschreibung | Relevanz BBL | Kommentar |
|----|-------------------|-----------|--------------|--------------|-----------|
| 1 | Grundstücksfläche (GSF) | Attribut | Die gesamte Fläche des betrachteten Grundstücks, das eine oder mehrere Parzellen oder Teile davon umfassen kann. | Sehr hoch - Fundamentale Grösse für die Immobilienbewertung und -verwaltung im BBL, insbesondere zur Abgrenzung und Einordnung von Liegenschaften. | Eine übergeordnete Flächenmessgrösse des Grundstücks. |
| 2 | Gebäudegrundfläche (GGF) | Attribut | Jene Fläche des Grundstücks, die von Gebäuden oder Gebäudeteilen durchdrungen wird. | Hoch - Wichtig für die Definition des belegten Grundstückanteils durch Gebäude und für städtebauliche Analysen. | Eine Messgrösse des Grundstückanteils, der von Gebäuden belegt wird. |
| 3 | Umgebungsfläche (UF) | Attribut | Jene Fläche des Grundstücks, die nicht von Gebäudeteilen durchdrungen wird und nach Bauausführung bepflanzt, begangen oder befahren werden kann. | Hoch - Relevant für das Flächenmanagement von Aussenanlagen und Grünflächen des BBL, unterteilt in bearbeitete (BUF) und unbearbeitete (UUF) Flächen. | Eine Messgrösse für die unbebauten Flächen eines Grundstücks. |
| 4 | Geschossfläche (GF) | Attribut | Die allseitig umschlossene und überdeckte Grundrissfläche der zugänglichen Geschosse einschliesslich der Konstruktionsflächen. | Sehr hoch - Zentrale Kennzahl für die Dimensionierung von Gebäuden, Basis für Kostenermittlungen und Variantenvergleiche. | Eine übergeordnete Flächenmessgrösse pro Geschoss. |
| 5 | Nettogeschossfläche (NGF) | Attribut | Der Teil der Geschossfläche GF zwischen den umschliessenden oder innenliegenden Konstruktionsbauteilen. Sie gliedert sich in Nutzfläche (NF), Verkehrsfläche (VF) und Funktionsfläche (FF). | Sehr hoch - Wichtig für die detaillierte Raum- und Flächenplanung von Liegenschaften und die Zuweisung zu spezifischen Nutzungen. | Eine Messgrösse für die tatsächlich nutzbare Fläche innerhalb eines Geschosses. |
| 6 | Nutzfläche (NF) | Attribut | Der Teil der Nettogeschossfläche NGF, welcher der Zweckbestimmung und Nutzung des Gebäudes im weiteren Sinn dient. Gliedert sich in Hauptnutzfläche (HNF) und Nebennutzfläche (NNF). | Sehr hoch - Kern für das Flächenmanagement, Mietermanagement und die Zuweisung von Räumen zu spezifischen Zwecken. | Eine Messgrösse für die direkt der Gebäudenutzung dienenden Flächen. |
| 7 | Hauptnutzfläche (HNF) | Attribut | Der Teil der Nutzfläche NF, welcher der Zweckbestimmung und Nutzung des Gebäudes im engeren Sinn dient. | Sehr hoch - Entscheidend für die Kernnutzung von Gebäuden und deren Effizienzbewertung. | Eine spezifische Messgrösse der Nutzfläche für den Hauptzweck. |
| 8 | Nebennutzfläche (NNF) | Attribut | Der Teil der Nutzfläche NF, welcher die Hauptnutzfläche HNF zur Nutzfläche ergänzt, z.B. Waschküchen, Keller- und Estrichräume, Fahrzeugeinstellräume. | Hoch - Wichtig für die vollständige Erfassung aller nutzungsrelevanten Flächen im BBL, die die Hauptnutzung ergänzen. | Eine spezifische Messgrösse der Nutzfläche, die die Hauptnutzung ergänzt. |
| 9 | Verkehrsfläche (VF) | Attribut | Jener Teil der Nettogeschossfläche NGF, welcher ausschliesslich deren Erschliessung dient, z.B. Korridore, Treppen, Aufzugsschächte. | Hoch - Relevant für die Planung und Bewertung der Erschliessungseffizienz von Gebäuden und für Sicherheitskonzepte. | Eine Messgrösse für die Flächen, die der Erschliessung dienen. |
| 10 | Funktionsfläche (FF) | Attribut | Jener Teil der Nettogeschossfläche NGF, der für haustechnische Anlagen zur Verfügung steht, z.B. Räume für Haustechnikanlagen, Schächte, Tankräume. | Hoch - Wichtig für das Management der Gebäudetechnik im BBL und die Bereitstellung notwendiger Flächen für Installationen. | Eine Messgrösse für Flächen, die für technische Anlagen reserviert sind. |
| 11 | Konstruktionsfläche (KF) | Attribut | Die Grundrissfläche der innerhalb der Geschossfläche GF liegenden umschliessenden und innenliegenden Konstruktionsbauteile wie Aussen- und Innenwände, Stützen. | Hoch - Erforderlich für die vollständige Flächenbilanzierung und das Verständnis der baulichen Struktur von Gebäuden. | Eine Messgrösse für die Grundrissfläche der Bauteile. |
| 12 | Aussen-Geschossfläche (AGF) | Attribut | Die genutzte Grundrissfläche ausserhalb der allseitig umschlossenen und überdeckten Geschossfläche, z.B. Balkone, Terrassen, Dachgärten, offene Parkgaragen. | Hoch - Wichtig für die Erfassung und Bewertung von nicht vollständig umschlossenen, aber nutzbaren Flächen an Immobilien. | Eine Messgrösse für genutzte Aussenflächen auf Geschossebene. |
| 13 | Flächen zur Sondernutzung (FSN) | Fachbegriff | Flächen zum ausschliesslichen Gebrauch durch den Mieter bzw. zur Sondernutzung durch den Stockwerkeigentümer. | Hoch - Direkt relevant für das Mietermanagement und die Verwaltung von Stockwerkeigentum im BBL, zur Definition von exklusiven Nutzungsrechten. | Eine Klassifikation für Flächen mit exklusiven Nutzungsrechten (Miete/Stockwerkeigentum). |
| 14 | Flächen zur gemeinsamen Nutzung (FGN) | Fachbegriff | Flächen, die von den Mietern oder Stockwerkeigentümern gemeinsam genutzt werden oder die zum Betrieb des Gebäudes notwendig sind. | Hoch - Wichtig für die Zuordnung und Abrechnung von Gemeinschaftsflächen in Liegenschaften und die Betriebsführung. | Eine Klassifikation für Flächen mit gemeinschaftlicher Nutzung oder für den Gebäudebetrieb. |
| 15 | Gebäudevolumen (GV) | Attribut | Wird aus der Geschossfläche GF und der dazugehörigen Höhe berechnet, ohne jegliche Zuschläge oder Abzüge. | Sehr hoch - Fundamentale Grösse für die volumetrische Erfassung von Gebäuden, insbesondere für Kostenermittlungen und Energieanalysen. | Eine übergeordnete Volumenmessgrösse des gesamten Gebäudes. |
| 16 | Nettogebäudevolumen (NGV) | Attribut | Der Teil des Gebäudevolumens GV zwischen den umschliessenden oder innenliegenden Konstruktionsbauteilen. Es gliedert sich in Nutzvolumen (NV), Verkehrsvolumen (VV) und Funktionsvolumen (FV). | Sehr hoch - Detailtiefe für Volumenberechnungen, wichtig für die Effizienzbewertung von Gebäuden und die Optimierung der Raumausnutzung. | Eine Messgrösse für das tatsächlich nutzbare Volumen innerhalb des Gebäudes. |
| 17 | Konstruktionsvolumen (KV) | Attribut | Das Volumen aller umschliessenden und innenliegenden Konstruktionsteile wie Aussen- und Innenwände, Stützen, Brüstungen, Dächer, Decken und Böden. | Hoch - Relevant für die Erfassung des Volumens der tragenden und nicht-tragenden Bauteile in Gebäuden. | Eine Messgrösse für das Volumen der Bauteile. |
| 18 | Aussen-Konstruktionsvolumen (AKV) | Attribut | Das Volumen aller aussenliegenden Konstruktionsteile, die als Aussen-Konstruktionsfläche erfasst werden, sowie von Vordächern, Balkon- und Laubengangplatten usw. | Hoch - Ergänzt die Volumenerfassung um aussenseitige Bauteile, wichtig für die vollständige Modellierung und Bewertung von Immobilien. | Eine Messgrösse für das Volumen von aussenliegenden Konstruktionsteilen. |

*Tabelle: Begriffe SIA 416*

<!-- TODO: SIA 416 Flächenbaum PDF als Bild einfügen -->

### 5.12 CRB eBKP-H (Elementbasierter Baukostenplan Hochbau)

- **Priorität:** A (Sehr hoch)
- **Dokumentation:**
  - Webseite: https://www.crb.ch/de/normen-standards/baukostenplane/baukostenplan-hochbau-ebkp-h

**Beschreibung:** Der eBKP-H ist der schweizerische Standard für die systematische Kostengliederung von Hochbauprojekten. Er bietet eine hierarchische Struktur mit Hauptgruppen, Elementgruppen und Elementen für die durchgängige Kostenplanung von der strategischen Planung bis zur Inbetriebnahme.

**Relevanz für BBL:** Als zentraler Schweizer Standard für die Kostengliederung ist der eBKP-H für das BBL unverzichtbar. Er ermöglicht die standardkonforme Kostenerfassung, -kontrolle und -steuerung über den gesamten Immobilienlebenszyklus und bildet die Basis für Kennwertbildung und Benchmarking.

<!-- TODO: Vollständige Tabelle der eBKP-H Begriffe hier einfügen -->

![Stufen- und phasengerechte Anwendung eBKP-H](assets/architektonische-sicht_ebkph-anwendung.png)

*Bild: Stufen- und phasengerechte Anwendung*

**Hinweis:** Die vollständige Elementstruktur umfasst über 400 Elemente. Diese Übersicht zeigt nur die wichtigsten strukturellen Begriffe und Hauptgruppen für das Datenmodell.

### 5.X BIMids

- **Priorität:** <!-- TODO -->
- **Dokumentation:**
  - Webseite: https://www.bimids.eu/

**Beschreibung:** <!-- TODO -->

<!-- TODO: Vollständige Tabelle der BIMids Begriffe hier einfügen -->

---

## 6. Verweise und Anhang

### 6.1 Verweise

#### Gesetzliche Grundlagen und Verordnungen

**Schweizerisches Recht**

- Schweizerisches Zivilgesetzbuch (ZGB), Art. 655-712: Sachenrecht und Grundeigentum: https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de
- Grundbuchverordnung (GBV), SR 211.432.1: https://www.fedlex.admin.ch/eli/oc/2021/918/de
- Verordnung über das Gebäude- und Wohnungsregister (VGWR), SR 431.841: https://www.fedlex.admin.ch/eli/cc/2017/376/de

#### Normen und Standards

**Internationale Standards**

- ISO 16739-1:2024: Industry Foundation Classes (IFC) for data sharing in the construction and facility management industries: https://www.iso.org/standard/84568.html
- ISO 19650-Serie: Information management using building information modelling: https://www.iso.org/standard/68078.html

**Schweizer E-Government Standards**

- eCH-0129: Objektwesen - Referenz- und Austauschstandard (Version 6.0.0): http://ech.ch/de/ech/ech-0129/6.0.0
- eCH-0153: eGRISDM - Datenmodell des elektronischen Grundstücksinformationssystems: http://ech.ch/de/ech/ech-0153/3.0
- eCH-0010: Schweizerische Postadresse: http://ech.ch/de/ech/ech-0010/8.0

**Schweizer Baunormen**

- SIA 416:2003: Flächen und Volumen von Gebäuden: https://www.sia.ch/de
- SIA 112: Modell Bauplanung: https://www.sia.ch/de

#### Fachspezifische Dokumentationen

**Bauen Digital Schweiz**

- Datenfeldkataloge und BIM-Richtlinien: https://bauen-digital.ch/
- BIM2FM - BIM für Facility Management: https://bim2fm.bauen-digital.ch/

**CRB Standards**

- eBKP-H: Elementbasierter Baukostenplan Hochbau: https://www.crb.ch/de/normen-standards/baukostenplane/baukostenplan-hochbau-ebkp-h

**Amtliche Vermessung**

- DM.01-AV-CH: Datenmodell der amtlichen Vermessung: https://www.cadastre-manual.admin.ch/de/datenmodell-der-amtlichen-vermessung-dm01-av-ch

#### Internationale Initiativen und Ontologien

**Building Performance Standards**

- IBPDI - International Building Performance & Data Initiative:
  - Webseite: https://ibpdi.org/
  - GitHub: https://github.com/ibpdi/cdm

**Semantic Web für Immobilien**

- RealEstateCore (REC): https://www.realestatecore.io/
  - Ontologie: https://dev.realestatecore.io/ontology/
- Building Topology Ontology (BOT): https://w3c-lbd-cg.github.io/bot/
- Brick Schema: https://brickschema.org/

#### Behördliche Plattformen und Register

**Bundesamt für Landestopografie swisstopo**

- ÖREB-Kataster: https://www.cadastre.ch/de/oereb-kataster
- Amtliche Vermessung: https://www.cadastre.ch/de/av

**Bundesamt für Statistik (BFS)**

- Gebäude- und Wohnungsregister: https://www.housing-stat.ch/
- Eidgenössisches Gebäude- und Wohnungsregister (GWR): https://www.bfs.admin.ch/bfs/de/home/register/gebaeude-wohnungsregister.html

#### Interne Referenzdokumente

**Weisungen und Richtlinien**

- Weisungen CAD-Daten (Bau 281d)
- Weisungen CAFM (Bau 282d)
- Vorgaben BIM BBL
- Weisungen Projekt- und Bewirtschaftungsakten (Bau 211d)
- Weisungen pbFM (Bau 212d)

**KBOB-Dokumente**

- KBOB-Richtlinien Nutzungszeiten
- KBOB-Empfehlungen Nachhaltigkeit im Bau

#### Weiterführende Literatur

**Digitalisierung im Bauwesen**

- buildingSMART International: https://www.buildingsmart.org/
- Open BIM: https://www.buildingsmart.org/about/openbim/

**Nachhaltigkeit**

- SNBS - Standard Nachhaltiges Bauen Schweiz: https://www.snbs-hochbau.ch/
- Minergie: https://www.minergie.ch/
- BREEAM: https://www.breeam.com/

#### Technische Spezifikationen

**Datenformate und Schnittstellen**

- IFC Specifications: https://technical.buildingsmart.org/standards/ifc/
- INTERLIS: https://www.interlis.ch/
- GML (Geography Markup Language): https://www.ogc.org/standard/gml/

### 6.3 Anhang

<!-- TODO: Anhang-Dateien hier referenzieren -->
