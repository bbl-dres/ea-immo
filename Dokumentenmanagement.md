# Detailstudie - Dokumentenmanagement 🟢

**Arbeitsdokument**

- Inhalte werden als PDFs im Anhang versioniert (nur Meilensteine)
- Zugang zum Dokument ist auf Mitarbeiter der Bundesverwaltung eingeschränkt (open by default)
- Inhalte können mit Abstimmung [Rasner David BBL](https://confluence.bbl.admin.ch/display/~U80865084) extern geteilt werden

**Inhalt:**

- [1. Ziel dieses Dokuments](#DetailstudieDokumentenmanagement🟢-1.ZieldiesesDokuments)
- [2. Dokumentenmanagement – Aufgaben und Bedeutung](#DetailstudieDokumentenmanagement🟢-2.Dokumentenmanagement–AufgabenundBedeutung)
- [3. Empfehlung Geschäftsobjekte (Konsolidiert)](#DetailstudieDokumentenmanagement🟢-3.EmpfehlungGeschäftsobjekte(Konsolidiert))
- [4. Übersicht der relevanten Standards](#DetailstudieDokumentenmanagement🟢-4.ÜbersichtderrelevantenStandards)
- [5. Wichtigste Standards im Detail (schrittweise Ergänzung)](#DetailstudieDokumentenmanagement🟢-5.WichtigsteStandardsimDetail(schrittweiseErgänzung))
  - [5.1. Bundesgesetz über die Archivierung (ArchG), SR 152.1](#DetailstudieDokumentenmanagement🟢-5.1.BundesgesetzüberdieArchivierung(ArchG),SR152.1)
  - [5.2. eCH-0039 E-Government-Schnittstelle für Dossiers und Dokumente](#DetailstudieDokumentenmanagement🟢-5.2.eCH-0039E-Government-SchnittstellefürDossiersundDokumente)
  - [5.3 KBOB Bauwerksdokumentation im Hochbau - Dokumentationsmodell BWD](#DetailstudieDokumentenmanagement🟢-5.3KBOBBauwerksdokumentationimHochbau-DokumentationsmodellBWD)
  - [5.4. SIA 112 Modell Bauplanung](#DetailstudieDokumentenmanagement🟢-5.4.SIA112ModellBauplanung)
- [6. Verweise und Anhang](#DetailstudieDokumentenmanagement🟢-6.VerweiseundAnhang)

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

# 2. Dokumentenmanagement – Aufgaben und Bedeutung

### 2.1. Rolle im Immobilienmanagement

Das Dokumentenmanagement bildet das informationelle Rückgrat des gesamten Immobilienmanagements im BBL. Es orchestriert die strukturierte Erfassung, Verwaltung, Bereitstellung und langfristige Archivierung aller dokumentenbezogenen Informationen und schafft die unverzichtbare Informationsbasis für alle nachgelagerten Domänen (Projektmanagement, Architektonische Sicht, Objektmanagement, Energiemanagement, Mietermanagement).

### 2.2. Inhaltliche Dimensionen

Das Dokumentenmanagement umfasst fünf zentrale Dimensionen:

1. **Dokumentenstruktur:** Pläne, Verträge, Gutachten, Berichte, Bewilligungen, Zertifikate und sonstige Dokumente in hierarchischer und thematischer Gliederung nach KBOB-Standards.
2. **Lebenszyklus-Management:** Dokumentenerstellung, -prüfung, -freigabe, -verteilung, -aktualisierung, -archivierung und -löschung gemäss definierten Workflows und rechtlichen Aufbewahrungsfristen.
3. **Metadaten und Klassifikation:** Strukturierte Beschreibung von Dokumenten mit standardisierten Metadaten, Klassifikationssystemen (ISG-Klassifizierung) und Verknüpfungen zu Objekten der Architektonischen Sicht.
4. **Rechtliche Compliance:** Einhaltung von Aufbewahrungsfristen (ArchG), Datenschutzbestimmungen (DSG), Informationssicherheitsanforderungen (ISG) und Geschäftsverwaltungsvorschriften (GVV).
5. **Digitale Integration:** BIM-Verknüpfung, Common Data Environment (CDE), automatisierte Metadatenextraktion und Integration mit anderen Fachdomänen über standardisierte Schnittstellen.

### 2.3. Kernaufgaben

1. **Strukturierte Dokumentenverwaltung:** Einheitliche Ablagestrukturen mit eindeutigen Identifikatoren und standardisierten Namenskonventionen gemäss KBOB-Dokumenttypenkatolog.
2. **Versions- und Änderungsmanagement:** Nachvollziehbare Versionierung, Änderungshistorie und Status-Management mit rollenbasierten Freigabeprozessen.
3. **Metadaten-Management:** Automatisierte und manuelle Erfassung, Validierung und Pflege von Dokumentenmetadaten zur Verbesserung der Auffindbarkeit und Nachvollziehbarkeit.
4. **Integration und Interoperabilität:** Seamlose Verknüpfung mit der Architektonischen Sicht, automatisierter Datenaustausch zwischen Systemen und standardkonforme Schnittstellen zu externen Partnern.
5. **Compliance und Governance:** Implementierung rechtlicher Anforderungen, Audit-Trails, Datenschutz-konforme Verarbeitung und langfristige Archivierungsstrategien.

### 2.4. Strategische Bedeutung

Das Dokumentenmanagement gewährleistet Rechtssicherheit und Compliance durch systematische Dokumentation aller Geschäftsprozesse und deren rechtskonforme Archivierung. Es schafft eine langfristige, technologieunabhängige Informationsbasis, die skalierbar und interoperabel mit der schweizerischen E-Government-Landschaft ist.

Als zentrale Domäne ermöglicht es die durchgängige Informationsversorgung aller Immobilienprozesse über den gesamten Lebenszyklus und bildet die Grundlage für zukünftige Technologien wie AI-gestützte Dokumentenanalyse, automatisierte Compliance-Prüfung und intelligente Informationsextraktion.

Die Verbindung zur Architektonischen Sicht erfolgt durch die systematische Verknüpfung von Dokumenten mit physischen Objekten (Grundstücke, Gebäude, Räume, Systeme, Komponenten), wodurch ein vollständiges digitales Abbild der Immobilie mit ihrer gesamten Dokumentationshistorie entsteht.

# 3. Empfehlung Geschäftsobjekte (Konsolidiert)

**Bedeutung der Prioritätsstufen:**

- **Muss**: Geschäftsobjekte, die für die fachliche Vollständigkeit der Architektonischen Sicht zwingend erforderlich sind. Diese Objekte bilden das Kerngerüst des Datenmodells und sind für die grundlegenden Geschäftsprozesse im Immobilienmanagement unabdingbar.
- **Sollte**: Geschäftsobjekte, die das fachliche Datenmodell um wichtige Aspekte erweitern und die praktische Anwendbarkeit erheblich steigern. Sie sind nicht kritisch für die Grundfunktionalität, aber wichtig für eine vollständige fachliche Abbildung der Immobilienwelt.
- **Könnte**: Geschäftsobjekte, die zusätzlichen fachlichen Mehrwert bieten und erweiterte Anwendungsfälle ermöglichen. Sie erweitern das Datenmodell um spezialisierte Bereiche, sind aber nicht für die Kerngeschäftsprozesse erforderlich.
- **Wird nicht**: Geschäftsobjekte, die bewusst nicht in der Architektonischen Sicht modelliert werden, entweder weil sie durch andere Objekte fachlich abgedeckt sind oder weil sie fachlich in anderen Domänen zugeordnet sind.

|  | Gruppe/ Geschäftsobjekt | Priorität | Beschreibung | Primäre Identifikatoren | Relevante Standards | Kommentar |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | **Dokumentstruktur** |  |  |  |  |  |
| 2 | Dokument | Muss | Einzelne aufgezeichnete Information unabhängig vom Informationsträger (Pläne, Verträge, Berichte, E-Mails) | BBL-Dokument-ID / UUID | eCH-0039, KBOB BWD, ISO 15489 | Zentrale Verwaltungseinheit für alle BBL-Informationen |
| 3 | Dossier | Muss | Zusammengehörige Dokumente zu einem Geschäft oder Vorgang als strukturierte Einheit | BBL-Dossier-ID / UUID | eCH-0039, ArchG, GEVER | Organisationseinheit für Geschäftsfälle und Projekte |
| 4 | Version | Muss | Versionierte Instanz eines Dokuments mit Änderungshistorie | BBL-Version-ID | eCH-0039, ISO 15489 | Für Nachvollziehbarkeit und Änderungsmanagement |
| 5 | Dokumenttyp | Soll | Katalogentität für die Klassifikation ähnlicher Dokumente mit spezifischem Informationsgehalt | Dokumenttypcode (DTC) | KBOB BWD | Strukturiert Dokumentablage nach Leistungsbereichen |
| 6 | **Metadaten** |  |  |  |  |  |
| 7 | Metadatensatz | Soll | Eigenständige Entität für strukturierte Beschreibungsinformationen zu Dokumenten | BBL-Metadaten-ID | Dublin Core, ISO 23081, eCH-0039 | Flexibles Metadatenmanagement |
| 8 | **Prozesse** |  |  |  |  |  |
| 9 | Workflow | Soll | Definierter Ablauf für Dokumentenbearbeitung mit Status und Übergängen | BBL-Workflow-ID | eCH-0039, ISO 15489 | Steuert Dokumentenlebenszyklen |
| 10 | Anweisung | Kann | Strukturierte Handlungsanweisung für Dokumentenbearbeitung | BBL-Anweisung-ID | eCH-0039 | Directive gemäss eCH-0039 |
| 11 | **Archivierung** |  |  |  |  |  |
| 12 | Archivgut | Muss | Dokumente mit bleibendem Wert, die dauerhaft aufbewahrt werden | BBL-Archiv-ID | ArchG, ISAD(G) | Endstatus wertvoller Dokumente |
| 13 | Vorarchiv | Kann | Zwischenlager für Dokumente vor der definitiven Archivierung | BBL-Vorarchiv-ID | ArchG | Übergangsbereich vor Archivierung |
| 14 | **Organisation** |  |  |  |  |  |
| 15 | Registraturplan | Soll | Systematisches Ordnungssystem für die strukturierte Ablage | BBL-Registratur-ID | ArchG, eCH-0002 | Basis für Ablagestruktur |
| 16 | **Kommunikation** |  |  |  |  |  |
| 17 | Nachricht | Kann | Standardisierte Struktur für Dokumentenaustausch zwischen Systemen | BBL-Nachricht-ID | eCH-0039 | Transportcontainer für Austausch |
| 18 | **Physische Dokumente** |  |  |  |  |  |
| 19 | Physisches Archiv | Wird nicht | Physische Aufbewahrungsorte für Papierdokumente | - | - | Fokus auf digitale Dokumentation |
| 20 | **Technische Objekte** |  |  |  |  |  |
| 21 | Datei | Wird nicht | Technische Repräsentation des Dokumenteninhalts | - | - | Teil des Dokument-Objekts |

Tabelle: Empfehlung Geschäftsobjekte (Konsolidiert)

![](assets/Dokumentenmanagement/225346211.png)

Bild: Empfehlung Geschäftsobjekte (Konsolidiert) - Vereinfachte Darstellung. [Quelle](https://www.mermaidchart.com/app/projects/5ddada0a-47f7-43e6-87eb-a297e604e809/diagrams/882e5edb-fe33-409b-8bf7-8c0743c89332/version/v0.1/edit)

# 4. Übersicht der relevanten Standards

Die folgende Tabelle bietet eine konsolidierte Übersicht der wichtigsten "Best Practice"-Standards, die für die Modellierung des "Dokumentenmanagements" im BBL von hoher Relevanz sind, mit einem klaren Fokus auf Schweizer Gesetze und Normen sowie den spezifischen Anforderungen der Bundesverwaltung.

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

### 4.3 Übersicht als Tabelle

|  | Kategorie / Name des Standards | Beschreibung (Kurz) | Relevanz für BBL | Kommentar |
| --- | --- | --- | --- | --- |
| 1 | **Rechtliche Grundlagen** |  |  |  |
| 2 | Bundesgesetz über die Archivierung (ArchG) | Regelt die Archivierung und langfristige Aufbewahrung von Unterlagen des Bundes | Sehr hoch | Zentral für Lifecycle-Management und Compliance |
| 3 | Datenschutzgesetz (DSG) | Regelt den Umgang mit personenbezogenen Daten in der digitalen Dokumentation | Sehr hoch | Compliance-kritisch für alle Personendaten |
| 4 | Bundesgesetz über die Informationssicherheit (ISG) | Regelt Schutz und sichere Handhabung sensitiver Informationen mit Klassifizierungssystem | Sehr hoch | Grundlage für Dokumentenklassifizierung |
| 5 | **BBL Weisungen und Prozesse** |  |  |  |
| 6 | [Platzhalter] | [BBL-interne Weisungen und Prozesse werden hier ergänzt] | - | - |
| 7 | **BBL Fachanwendungen** |  |  |  |
| 8 | ActaNova GEVER | [Platzhalter: Geschäftsverwaltungssystem] | Sehr hoch | Zentrale GEVER-Plattform |
| 9 | CDE Bund | [Platzhalter: Common Data Environment] | Sehr hoch | Projektdokumentation |
| 10 | IBM FileNet (DALA) | [Platzhalter: Planarchiv] | Sehr hoch | Digitales Planarchiv BBL |
| 11 | **Technische Standards - Schweizer E-Government** |  |  |  |
| 12 | eCH-0039 Records Management | Schweizer E-Government-Standard für systematische Verwaltung von Dokumenten in hierarchischen Dossiers | Sehr hoch | Definiert Dossierstruktur und Metadatenstandards |
| 13 | eCH-0002 Records Management | Standard, der vollständig den ISO 15489-Records Management referenziert | Hoch | Brücke zu internationalen Standards |
| 14 | eCH-0026 Records Management Policy | Muster-Policies für das Records Management zur Erarbeitung von Führungsgrundlagen | Hoch | Praktische Umsetzungshilfen |
| 15 | eCH-0147 Austauschformat elektronische Dokumente | Standard für strukturierten Austausch elektronischer Dokumente zwischen Behörden | Hoch | Wichtig für behördenübergreifende Zusammenarbeit |
| 16 | GEVER Standards Bund | Hilfsmittel zur Standardisierung und Einführung der Geschäftsverwaltung (GEVER) | Sehr hoch | Operative Basis für BBL-Geschäftsverwaltung |
| 17 | Framework Records Management | Orientierungshilfe für ganzheitliche Herangehensweise an Records Management-Fragestellungen | Hoch | Verständigungsbasis für RM-Aktivitäten |
| 18 | **Technische Standards - Bau- und Immobilienspezifisch** |  |  |  |
| 19 | KBOB Bauwerksdokumentation im Hochbau (BWD) | Standardisierung von Dokumenttypen für Immobilienprojekte der öffentlichen Hand | Sehr hoch | Definiert einheitliche Dokumenttypologie |
| 20 | SIA-Norm 112 Modell Bauplanung | Definiert Leistungsmodell für Bauwerksplanung inklusive Dokumentationsanforderungen | Hoch | Ordnet Dokumente in Projektphasen ein |
| 21 | SIA-Norm 113 FM-gerechte Bauplanung | Regelt Dokumentationsanforderungen für den späteren Betrieb von Gebäuden | Hoch | Wichtig für Übergabedokumentation |
| 22 | FIDJI DOC Standard | Standard-Ablageplan für Immobiliendokumente basierend auf Kernstruktur | Sehr hoch | Internationale Best Practice |
| 23 | GIF Standard Immobiliendatenraum | Standard zum Aufbau eines Immobiliendatenraums und Dokumentenmanagement-Systems | Sehr hoch | Deutscher Standard für Immobiliendokumentation |
| 24 | **Technische Standards - Kollaborative Umgebungen** |  |  |  |
| 25 | DIN SPEC 91391 Gemeinsame Datenumgebungen (CDE) | Standard für kollaborative Dokumentenumgebungen in Bauprojekten | Sehr hoch | Basis für digitale Projektzusammenarbeit |
| 26 | ISO 19650 Organization of Information (BIM) | Internationale Norm für Informationsmanagement mit digitalen Methoden | Hoch | Relevant für CDE-Integration bei BIM-Projekten |
| 27 | **Technische Standards - Records Management International** |  |  |  |
| 28 | ISO 15489 Records Management | Internationaler Standard für systematische Verwaltung von Geschäftsunterlagen | Hoch | Ergänzt schweizerische Standards |
| 29 | ISO 30300 Management Systems for Records | Standard für Managementsysteme im Records Management | Hoch | Framework für kontinuierliche Verbesserung |
| 30 | ISO 23081 Metadata for Records | Internationaler Standard für Metadaten in Records Management Systemen | Sehr hoch | Technische Grundlage für Metadaten-Schemata |
| 31 | MoReq Model Requirements | Europäische Spezifikation für elektronische Records Management Systeme | Hoch | Ergänzt ISO-Standards um europäische Perspektive |
| 32 | **Technische Standards - Facility Management** |  |  |  |
| 33 | GEFMA 100-1 Facility Management Grundlagen | Deutsche Richtlinie zur systematischen Definition von FM-Prozessen | Hoch | Branchenführender Standard |
| 34 | GEFMA 400 Datenmanagement im FM | Richtlinie für strukturiertes Datenmanagement in Facility Management Systemen | Sehr hoch | Spezifisch für Immobiliendatenmanagement |
| 35 | GEFMA 920 CAFM | Standard für CAFM-Systeme mit Dokumentenmanagement-Komponenten | Hoch | Technische Umsetzung |
| 36 | IFMA Standards | International Facility Management Association Standards | Hoch | Internationale Perspektive |
| 37 | **Technische Standards - Metadaten und Klassifikation** |  |  |  |
| 38 | Dublin Core Metadata | Universeller Standard für grundlegende Metadaten-Elemente | Hoch | Grundlage für Metadaten-Schemata |
| 39 | MODS (Metadata Object Description Schema) | Umfassender Standard für strukturierte Objektbeschreibung | Mittel | Für wissenschaftliche/technische Dokumente |
| 40 | MARC Machine-Readable Cataloging | Standard für bibliographische Datensätze und Katalogisierung | Mittel | Professionelle Bestandsverwaltung |
| 41 | **Technische Standards - Archivierung** |  |  |  |
| 42 | ISAD(G) International Standard Archival Description | Internationaler Standard für archivische Erschliessung | Hoch | Professionelle Archivierungspraktiken |
| 43 | EAD (Encoded Archival Description) | XML-Standard für strukturierte Archivbeschreibungen | Hoch | Digitale Langzeitarchivierung |
| 44 | PREMIS Preservation Metadata | Standard für Erhaltungs-Metadaten digitaler Objekte | Sehr hoch | Kritisch für digitale Nachhaltigkeit |
| 45 | OAIS Open Archival Information System | Referenzmodell für digitale Langzeitarchivierung | Hoch | Grundlage für Archivierungsstrategie |
| 46 | **Externe Beispiele** |  |  |  |
| 47 | [Zu ergänzen] | [Verifizierte Praxisbeispiele und Best-Practice-Implementierungen] | - | Zur Orientierung |

Tabelle: Übersicht der relevanten Standards

# 5. Wichtigste Standards im Detail (schrittweise Ergänzung)

Zur einheitlichen Klassifizierung der Begriffe und Standards werden folgende Kategorien verwendet:

- **Fachanwendung**: Operatives IT-System, Register oder Plattform mit definiertem Zweck, Datenhoheit und Schnittstellen.
- **Geschäftsprozess**: Strukturierte Abfolge von Aktivitäten zur Erreichung eines klar definierten fachlichen Ziels, inkl. Rollen und Ergebnissen.
- **Geschäftsobjekt**: Fachlich abgegrenzte Entität mit eindeutiger Identität über ihren Lebenszyklus (z. B. Identifikator, Zustände).
- **Geschäftsobjekttyp**: Spezialisierung oder Ausprägung eines Geschäftsobjekts mit zusätzlichen Merkmalen oder Regeln.
- **Dokument**: Informationsträger zur Dokumentation, Kommunikation oder Nachweisführung, analog oder digital, mit Metadaten.
- **Attribut**: Eigenschaft oder Merkmal eines Geschäftsobjekts, fachlich definiert und typisiert.
- **Fachbegriff**: Begriff, Definition oder Klassifikation mit fachlicher Bedeutung ohne eigene Objektidentität.
- **Relation**: Fachlich begründete Beziehung zwischen Geschäftsobjekten (z. B. Zugehörigkeit, Referenz, Abhängigkeit), inklusive Kardinalitäten und Regeln.

## 5.1. Bundesgesetz über die Archivierung (ArchG), SR 152.1

- **Priorität:** A (Sehr hoch)
- **Gesetzliche Grundlage:** <https://www.fedlex.admin.ch/eli/cc/1999/354/de>
- **Beschreibung:** Das Bundesgesetz über die Archivierung vom 26. Juni 1998 regelt die systematische Aufbewahrung und langfristige Sicherung von Unterlagen des Bundes. Es definiert die rechtlichen Rahmenbedingungen für die Archivierung rechtlich, politisch, wirtschaftlich, historisch, sozial oder kulturell wertvoller Unterlagen und schafft die Grundlagen für Rechtssicherheit sowie kontinuierliche und rationelle Verwaltungsführung.
- **Relevanz für BBL:** Als Bundesamt ist das BBL verpflichtet, alle Dokumentenmanagement-Prozesse gemäss ArchG zu strukturieren. Das Gesetz definiert verbindliche Anforderungen für die Bewertung, Aufbewahrung, Archivierung und Vernichtung von Dokumenten sowie die Zusammenarbeit mit dem Schweizerischen Bundesarchiv. Es bildet die rechtliche Grundlage für das gesamte Lifecycle-Management von BBL-Dokumenten.

|  | Begriff | Kategorie | Beschreibung | Relevanz BBL |
| --- | --- | --- | --- | --- |
| 1 | Unterlagen | Geschäftsobjekt | Alle aufgezeichneten Informationen unabhängig vom Informationsträger, die bei der Erfüllung öffentlicher Aufgaben erstellt oder empfangen wurden (Art. 3 Abs. 1 ArchG). | Sehr hoch - Grundlegende Entität für alle BBL-Dokumente. Umfasst Pläne, Verträge, Berichte, E-Mails etc. |
| 2 | Archivgut | Geschäftsobjekt | Unterlagen, die vom Bundesarchiv oder anderen zuständigen Stellen als archivwürdig übernommen und dauerhaft aufbewahrt werden (Art. 3 Abs. 3 ArchG). | Sehr hoch - Definiert den Endstatus wertvoller BBL-Dokumente nach der Bewertung. |
| 3 | Dossier | Geschäftsobjekt | Zusammengehörige Unterlagen zu einem Geschäft oder Vorgang, die als Einheit behandelt werden (Art. 3 Abs. 2 ArchG). | Sehr hoch - Strukturierungseinheit für BBL-Dokumentation. Basis für Aktenführung. |
| 4 | Archivwürdigkeit | Attribut | Eigenschaft von Unterlagen mit bleibendem rechtlichem, politischem, wirtschaftlichem, historischem, sozialem oder kulturellem Wert (Art. 2 Abs. 1 ArchG). | Sehr hoch - Zentrales Bewertungskriterium für alle BBL-Dokumente. |
| 5 | Schutzfrist | Attribut | Zeitraum, während dem der Zugang zu Archivgut eingeschränkt ist (Art. 9 ArchG, standardmässig 30 Jahre). | Hoch - Bestimmt Zugriffsrechte und Veröffentlichung von BBL-Dokumenten. |
| 6 | Anbietepflicht | Fachbegriff | Verpflichtung der Bundesstellen, nicht mehr ständig benötigte Unterlagen dem Bundesarchiv zur Übernahme anzubieten (Art. 6 ArchG). | Sehr hoch - Rechtliche Pflicht für alle BBL-Abteilungen zur systematischen Dokumentenabgabe. |
| 7 | Bewertung | Fachbegriff | Prozess zur Festlegung der Archivwürdigkeit von Unterlagen in Zusammenarbeit zwischen abliefernder Stelle und Bundesarchiv (Art. 7 ArchG). | Sehr hoch - Kritischer Prozess für die Selektion erhaltenswerter BBL-Dokumente. |
| 8 | Vernichtungsverbot | Fachbegriff | Verbot der Vernichtung anbietepflichtiger Unterlagen ohne Zustimmung des Bundesarchivs (Art. 8 ArchG). | Sehr hoch - Compliance-kritische Anforderung für BBL-Dokumentenverwaltung. |
| 9 | Aufbewahrungsfrist | Attribut | Zeitraum, während dem Unterlagen bei der abliefernden Stelle aufbewahrt werden müssen, bevor sie angeboten werden. | Hoch - Bestimmt Retention-Zeiten für verschiedene BBL-Dokumenttypen. |
| 10 | Ablieferung | Fachbegriff | Übergabe archivwürdiger Unterlagen von der anbietepflichtigen Stelle an das Bundesarchiv (Art. 7 Abs. 2 ArchG). | Hoch - Operativer Prozess für den Transfer von BBL-Dokumenten ans Archiv. |
| 11 | Registraturplan | Geschäftsobjekt | Systematisches Ordnungssystem für die strukturierte Ablage und Verwaltung von Unterlagen während ihrer aktiven Nutzung. | Sehr hoch - Grundlage für einheitliche Dokumentenstruktur im BBL. |
| 12 | Aktenführung | Fachbegriff | Systematische Erstellung, Ordnung und Verwaltung von Unterlagen während des laufenden Geschäftsbetriebs. | Sehr hoch - Operative Basis für rechtskonforme BBL-Dokumentenverwaltung. |
| 13 | Einsichtsrecht | Attribut | Recht auf Zugang zu Archivgut nach Ablauf der Schutzfristen (Art. 9-13 ArchG). | Hoch - Regelt öffentlichen Zugang zu BBL-Dokumenten nach Archivierung. |
| 14 | Bundesarchiv | Fachanwendung | Zentrale Bundesstelle für die Archivierung und dauerhafte Aufbewahrung von Unterlagen der Bundesverwaltung (Art. 4 ArchG). | Sehr hoch - Hauptpartner für BBL bei der Langzeitarchivierung. |
| 15 | Vorarchiv | Geschäftsobjekt | Zwischenlager für Unterlagen, die nicht mehr ständig benötigt werden, aber noch nicht ans Archiv abgeliefert sind. | Hoch - Übergangsbereich für BBL-Dokumente vor der Archivierung. |

Tabelle: Begriffe Bundesgesetz über die Archivierung

## 5.2. eCH-0039 E-Government-Schnittstelle für Dossiers und Dokumente

- **Priorität:** A (Sehr hoch)
- **Gesetzliche Grundlage:** <https://www.ech.ch/de/ech/ech-0039/3.1>
- **Beschreibung:** eCH-0039 standardisiert ein einheitliches Austauschformat für elektronische Dossiers, Dokumente sowie für Geschäftskontext. Die E-Government-Schnittstelle definiert ein funktionales sowie strukturelles Gerüst für den Datenaustausch über Systemgrenzen hinweg und unabhängig von spezifischen Lösungen. Sie ermöglicht den Austausch von fachspezifischen elektronischen Dossiers mit Dokumenten oder anderen Informationsobjekten sowie die Übertragung von Geschäftskontext mit optionalen Bearbeitungsanweisungen.
- **Relevanz für BBL:** Als zentraler Standard für die strukturierte Dokumentenverwaltung in der Bundesverwaltung definiert eCH-0039 die technische Basis für den systemübergreifenden Austausch von BBL-Dokumenten. Er legt die Datenstrukturen für Dossiers, Dokumente, Metadaten und Bearbeitungsanweisungen fest und gewährleistet die Interoperabilität zwischen verschiedenen GEVER-Systemen und Fachapplikationen.

|  | Begriff | Kategorie | Beschreibung | Relevanz BBL |
| --- | --- | --- | --- | --- |
| 1 | Dossier | Geschäftsobjekt | Strukturierungseinheit zur Abbildung einer Dossier- und Subdossierstruktur sowie deren Metadaten (Art. 3.2). Enthält UUID, Status, Titel, Klassifizierung und weitere Metadaten. | Sehr hoch - Zentrale Organisationseinheit für BBL-Geschäftsfälle und Projekte. |
| 2 | Dokument | Geschäftsobjekt | Basiskomponente zur Abbildung eines Dokuments sowie dessen Metadaten (Art. 3.3). Umfasst Identifikation, Status, Titel und Dateien. | Sehr hoch - Grundeinheit für alle BBL-Dokumente wie Pläne, Verträge, Berichte. |
| 3 | Nachricht | Geschäftsobjekt | Standardisierte Struktur für den Austausch zwischen Sender und Empfänger, bestehend aus Header und Content. | Sehr hoch - Transportcontainer für BBL-Dokumentenaustausch. |
| 4 | Anweisung (directive) | Geschäftsobjekt | Basiskomponente zur Abbildung einer Handlungsanweisung für den Empfänger (Art. 3.4). | Hoch - Strukturierte Arbeitsanweisungen in BBL-Prozessen. |
| 5 | UUID | Attribut | Universally Unique Identifier als eindeutiges Kennzeichen für Objekte. Referenz des Objekts, nicht der Nachricht. | Sehr hoch - Eindeutige Identifikation aller BBL-Dokumentenobjekte. |
| 6 | Dossier-Status | Attribut | Zustand in Bezug auf den Lebenszyklus eines Dossiers (z.B. erstellt, in Bearbeitung, abgeschlossen, archiviert). | Sehr hoch - Statusverwaltung für BBL-Geschäftsfälle. |
| 7 | Dokument-Status | Attribut | Zustand des Dokuments in Bezug auf Veränderbarkeit und Gültigkeit (z.B. in Bearbeitung, genehmigt, versendet). | Sehr hoch - Lifecycle-Management von BBL-Dokumenten. |
| 8 | Klassifizierungskategorie | Attribut | Grad, in dem das Dossier und die enthaltenen Dokumente vor unberechtigter Einsicht geschützt werden müssen (unclassified, confidential, secret, in\_house). | Hoch - Sicherheitsklassifikation für BBL-Dokumente. |
| 9 | Metadaten | Fachbegriff | Strukturierte Beschreibungsinformationen zu Dossiers und Dokumenten wie Titel, Eröffnungsdatum, Schlagwörter, Verweise. | Sehr hoch - Basis für Suche und Verwaltung im BBL. |
| 10 | Header | Geschäftsobjekt | Element mit Meldungsrahmen nach eCH-0058, enthält Absender, Empfänger, Nachrichten-ID und weitere Dispatch-Informationen. | Sehr hoch - Steuerungsinformationen für Dokumentenaustausch. |
| 11 | Nachrichtengruppe | Fachbegriff | Spezifische fachliche Ausprägung der E-Government-Schnittstelle für eine Fachdomäne. | Hoch - Anpassung an BBL-spezifische Anforderungen. |
| 12 | Bearbeitungsanweisung | Attribut | Anweisung an den Empfänger einer Nachricht (z.B. zur Bearbeitung, zur Kenntnis, zur Genehmigung). | Hoch - Workflow-Steuerung in BBL-Prozessen. |
| 13 | Datenschutzstufe | Attribut | Angabe, ob das Dossier besonders schützenswerte Personendaten oder Persönlichkeitsprofile gemäss Datenschutzrecht enthält. | Hoch - DSG-Compliance für BBL-Dokumente. |
| 14 | Öffentlichkeitsstatus | Attribut | Angabe, ob das Dossier/Dokument gemäss BGÖ schützenswerte Informationen enthält oder nicht. | Hoch - Transparenz und Öffentlichkeitsprinzip. |
| 15 | Primärdokumente | Fachbegriff | Die eigentlichen fachlichen Dokumente (Dateien), die den Inhalt des Dossiers darstellen. | Sehr hoch - Eigentliche Nutzdaten der BBL-Dokumentation. |

Tabelle: Begriffe eCH-0039 E-Government-Schnittstelle

## 5.3 KBOB Bauwerksdokumentation im Hochbau - Dokumentationsmodell BWD

- **Priorität:** A (Sehr hoch)
- **Referenz:** <https://www.kbob.admin.ch/de/bauwerksdokumentation-im-hochbau>
- **Beschreibung:** Die KBOB-Empfehlung "Bauwerksdokumentation im Hochbau" definiert einen Schweizer Standard für die systematische Dokumentation aller Prozesse, Phasen und Rollen im Lebenszyklus eines Bauwerks. Das Dokumentationsmodell BWD (Bauwerksdokumentation) strukturiert die Erfassung, Verwaltung und Archivierung aller relevanten Dokumente von der Projektierung über die Realisierung bis zur Bewirtschaftung. Es basiert auf etablierten Normen wie SIA 112/113 und integriert Bau- und Immobilienmanagementprozesse mit klaren Verantwortlichkeiten und Dokumentationsflüssen.
- **Relevanz für BBL:** Als zentraler Standard der öffentlichen Bauherren ist die KBOB Bauwerksdokumentation für das BBL verbindlich anzuwenden. Sie definiert einheitliche Dokumenttypen, Strukturen und Qualitätsanforderungen für alle BBL-Bauprojekte und gewährleistet die durchgängige Informationsversorgung über den gesamten Immobilienlebenszyklus. Der integrierte Dokumenttypenkatalog bildet die Grundlage für die systematische Klassifikation und Verwaltung aller BBL-Dokumente.

|  | Begriff | Kategorie | Beschreibung | Relevanz BBL |
| --- | --- | --- | --- | --- |
| 1 | Dokumenttyp | Geschäftsobjekttyp | Klasse ähnlicher Dokumente mit spezifischem Informationsgehalt (z.B. Projektplan, Betriebsanleitung, Entsorgungskonzept) | Sehr hoch - Basis für einheitliche Dokumentenklassifikation im BBL |
| 2 | Dokumenttypcode (DTC) | Attribut | Eindeutige Kennzeichnung eines Dokumenttyps bestehend aus Dokumentart, Register und fortlaufender Nummer (z.B. B07002) | Sehr hoch - Ermöglicht systematische Identifikation und Verwaltung |
| 3 | Dokumentart | Attribut | Gliederung in vier Kategorien: Organisation (O), Kosten (K), Beschriebe und Konzepte (B), Visualisierungen (V) | Sehr hoch - Strukturiert die Dokumentablage nach Leistungsbereichen |
| 4 | Grundlagedokumentation (GD) | Fachbegriff | Dokumentationsart: Alle für den Start einer neuen SIA-Phase notwendigen Dokumente aus vorangegangenen Phasen | Sehr hoch - Sichert Informationskontinuität zwischen Projektphasen |
| 5 | Projektdokumentation (PD) | Fachbegriff | Dokumentationsart: Definierter Umfang von Dokumenten aus den Projektakten Phase 1-5 mit Projektsicht auf das Bauwerk | Sehr hoch - Dokumentiert Bauprozess und Projektgeschichte |
| 6 | Objektdokumentation (OD) | Fachbegriff | Dokumentationsart: Definierter Umfang von Dokumenten aus Phase 1-6 mit Objektsicht für Bewirtschaftung | Sehr hoch - Operative Basis für FM und Betrieb |
| 7 | Archivdokumentation (AD) | Fachbegriff | Dokumentationsart: Aufbewahrungspflichtige Dokumente aus Projekt- und Objektdokumentation | Sehr hoch - Langzeitsicherung gemäss rechtlichen Vorgaben |
| 8 | Fachbereich | Attribut | Eindeutige Zuordnung eines Dokumenttyps zu einem Gewerk oder Fachgebiet (z.B. D01 Elektrotechnik, C00 Konstruktion) | Hoch - Ermöglicht fachspezifische Dokumentenverwaltung |
| 9 | Datenmanager | Fachbegriff | Rolle für Beschaffung, Qualitätsprüfung und Verteilung der Bauwerksdokumentation | Hoch - Operative Unterstützung für GPL und FM |
| 10 | Dokumentationsfluss | Fachbegriff | Systematischer Informationsfluss von Projektakten über strukturierte Dokumentationen bis zur Archivierung | Sehr hoch - Definiert Verantwortlichkeiten und Übergabepunkte |
| 11 | Vollständigkeit | Attribut | Qualitätsmerkmal für den kompletten Umfang der Dokumentation gemäss Checklisten | Sehr hoch - Compliance-kritisch für BBL |
| 12 | Datenqualität | Attribut | Qualitätsmerkmal für digital bearbeitbare Formate gemäss Richtlinien (CAD, CAFM) | Sehr hoch - Voraussetzung für Systemintegration |
| 13 | pbDM | Fachbegriff | Planungs- und baubegleitendes Datenmanagement zur phasengerechten Dokumentenbeschaffung | Sehr hoch - Prozess zur Qualitätssicherung |
| 14 | Aufbewahrungsfrist | Attribut | Zeitraum der verpflichtenden Dokumentenaufbewahrung (10-12 Jahre Standard, länger für spezielle Dokumente) | Sehr hoch - Rechtliche Compliance |

Tabelle: Begriffe KBOB Bauwerksdokumentation im Hochbau

![](assets/Dokumentenmanagement/225345968.png)![](assets/Dokumentenmanagement/225345969.png)

Bild Links: Begriff Bauwerksdokumentation. [Quelle](https://fachglossar.platinus.at/docs/Glossar/B-Glossar/Bauwerksdokumentation/)

Bild Rechts: Bauwerksdokumentation

## 5.4. SIA 112 Modell Bauplanung

- **Priorität:** A (Hoch)
- **Original Dokument:** <https://object.gever.admin.ch:443/web/?ObjectToOpenID=%24ActaNovaDocument%7c51BB6F95-8ACB-4CDB-A4FA-BE97F7E5CAA4&TenantID=169>
- **Beschreibung:** Die SIA-Norm 112 definiert ein phasenbezogenes Leistungsmodell für die Planung von Bauvorhaben. Sie bietet einen Ablauf mit verteilten Rollen und frei wählbaren Modulen zur strukturierten Organisation des Planungsprozesses. Die Norm gliedert den Planungsprozess in sechs Hauptphasen (Strategische Planung, Vorstudien, Projektierung, Ausschreibung, Realisierung, Bewirtschaftung) mit insgesamt 13 Teilphasen. Für jede Phase werden die erwarteten Ergebnisse, Dokumente sowie die Leistungen und Entscheide der Auftraggeber definiert.
- **Relevanz für BBL:** Die SIA 112 ist für das BBL als öffentlicher Bauherr von zentraler Bedeutung, da sie die strukturierte Dokumentation über den gesamten Lebenszyklus eines Bauwerks definiert. Sie legt fest, welche Dokumente in welcher Projektphase zu erstellen sind und bildet damit das Rückgrat für die phasengerechte Dokumentenverwaltung. Die Norm ermöglicht eine einheitliche Projektabwicklung und gewährleistet die vollständige Dokumentation aller Planungs- und Bauprozesse gemäss den Anforderungen der KBOB.

|  | Begriff | Kategorie | Beschreibung | Relevanz BBL |
| --- | --- | --- | --- | --- |
| 1 | Phase | Geschäftsobjekt | Hauptgliederungsebene des Bauplanungsprozesses:   - Phase 1 Strategische Planung - Phase 2 Vorstudien - Phase 3 Projektierung - Phase 4 Ausschreibung - Phase 5 Realisierung - Phase 6 Bewirtschaftung | Sehr hoch - Oberste Strukturierungsebene für gesamte Projektdokumentation |
| 2 | Teilphase | Geschäftsobjekt | Feingliederung innerhalb der Phasen:   - 11 Bedürfnisformulierung, Lösungsstrategien - 21 Definition des Bauvorhabens, Machbarkeitsstudie - 22 Auswahlverfahren - 31 Vorprojekt - 32 Bauprojekt - 33 Bewilligungsverfahren/Auflageprojekt - 41 Ausschreibung, Offertvergleich, Vergabe - 51 Ausführungsprojekt - 52 Ausführung - 53 Inbetriebnahme, Abschluss - 61 Betrieb - 62 Überwachung/Überprüfung/Wartung - 63 Instandhaltung | Sehr hoch - Definiert konkrete Dokumentationszeitpunkte und Meilensteine |
| 3 | Leistungsbereich | Attribut | Tätigkeitskategorien innerhalb jeder Teilphase: Organisation, Beschrieb und Visualisierung, Kosten/Finanzierung, Termine, Administration | Sehr hoch - Strukturiert die Dokumentenerstellung nach Themengebieten |
| 4 | Teilphasenziel | Attribut | Für jede Teilphase definiertes Ziel, das den Abschluss und die Rahmenbedingungen festlegt | Sehr hoch - Qualitätssicherung für Dokumentationsvollständigkeit |
| 5 | Erwartete Ergebnisse | Attribut | Pro Teilphase definierte Dokumente und Produkte, die in jedem Leistungsbereich entstehen sollen | Sehr hoch - Checkliste für vollständige BBL-Dokumentation |
| 6 | Gesamtleitung | Fachbegriff | Funktion für die Leitung und Koordination des Planerteams sowie Gewährleistung der Kommunikation mit dem Auftraggeber | Hoch - Verantwortlich für koordinierte Dokumentenübergabe |
| 7 | Machbarkeitsstudie | Geschäftsobjekt | Zentrales Dokument der Teilphase 21 zur Beurteilung von Vorgehen, Organisation, Machbarkeit und Projektdefinition | Sehr hoch - Entscheidungsgrundlage für Projektfortführung |
| 8 | Projektpflichtenheft | Geschäftsobjekt | Dokument mit Funktionen und Eigenschaften des Bauwerks zur Erreichung der in der Projektdefinition festgelegten Zielgrössen | Sehr hoch - Definiert Dokumentationsanforderungen |
| 9 | Leistungen der Planer | Fachbegriff | Pro Teilphase definierte Planungsleistungen nach Modulen, die innerhalb jedes Leistungsbereichs erbracht werden | Hoch - Bestimmt Umfang der Dokumentenerstellung |
| 10 | Entscheide des Auftraggebers | Fachbegriff | Pro Teilphase erforderliche Bauherrenentscheide zur Freigabe und Weiterführung des Projekts | Hoch - Freigabe von Dokumentationsphasen |

Tabelle: Begriffe SIA 112 Modell Bauplanung

![](assets/Dokumentenmanagement/225346095.png)

Bild: Phasen, Teilphasen und Teilphasenziele nach SIA 112. [Quelle](https://object.gever.admin.ch:443/web/?ObjectToOpenID=%24ActaNovaDocument%7c51BB6F95-8ACB-4CDB-A4FA-BE97F7E5CAA4&TenantID=169)

# 6. Verweise und Anhang

### 6.1 Verweise

- TBD

### 6.2 Anhang

|  | [Datei](/spaces/IMMO/pages/225345943/Detailstudie+-+Dokumentenmanagement+%F0%9F%9F%A2?sortBy=name&sortOrder=ascending) | [Geändert](/spaces/IMMO/pages/225345943/Detailstudie+-+Dokumentenmanagement+%F0%9F%9F%A2?sortBy=date&sortOrder=descending) |
| --- | --- | --- |
|  | PNG-Datei [image-20230625181419617-4ac4204a7a22c06927aa87335ab17a79.png](/download/Dokumentenmanagement/image-20230625181419617-4ac4204a7a22c06927aa87335ab17a79.png "Herunterladen") | 22.07.2025 by [Rasner David BBL](    /display/~U80865084 ) |
|  | Stichwörter  - Keine Stichwörter - [Stichwörter bearbeiten](# "Stichwörter bearbeiten")  Preview [$itemLabel]($itemRenderedUrl) [$itemLabel]($itemRenderedUrl) [$itemLabel]($itemRenderedUrl&isFromPageView=true) [$itemLabel]($itemRenderedUrl&isFromPageView=true) |
|  | PNG-Datei [image-2025-5-22\_12-46-7.png](/download/Dokumentenmanagement/image-2025-5-22_12-46-7.png "Herunterladen") | 22.07.2025 by [Rasner David BBL](    /display/~U80865084 ) |
|  | Stichwörter  - Keine Stichwörter - [Stichwörter bearbeiten](# "Stichwörter bearbeiten")  Preview [$itemLabel]($itemRenderedUrl&isFromPageView=true) [$itemLabel]($itemRenderedUrl&isFromPageView=true) [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true) [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true) |
|  | PNG-Datei [image-2025-7-23\_19-26-25.png](/download/Dokumentenmanagement/image-2025-7-23_19-26-25.png "Herunterladen") | 23.07.2025 by [Rasner David BBL](    /display/~U80865084 ) |
|  | Stichwörter  - Keine Stichwörter - [Stichwörter bearbeiten](# "Stichwörter bearbeiten")  Preview [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true) [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true) [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true&isFromPageView=true) [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true&isFromPageView=true) |
|  | PNG-Datei [Dokumentenmanagement (Vereinfachte Darst \_ Mermaid Chart-2025-07-24-165853.png](/download/Dokumentenmanagement/Dokumentenmanagement%20%28Vereinfachte%20Darst%20_%20Mermaid%20Chart-2025-07-24-165853.png "Herunterladen") | 24.07.2025 by [Rasner David BBL](    /display/~U80865084 ) |
|  | Stichwörter  - Keine Stichwörter - [Stichwörter bearbeiten](# "Stichwörter bearbeiten")  Preview [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true&isFromPageView=true) [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true&isFromPageView=true) [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true&isFromPageView=true&isFromPageView=true) [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true&isFromPageView=true&isFromPageView=true) |
|  | Datei [Dokumentenmanagement (Vereinfachte Darst \_ Mermaid Chart-2025-07-24-165858.mmd](/download/Dokumentenmanagement/Dokumentenmanagement%20%28Vereinfachte%20Darst%20_%20Mermaid%20Chart-2025-07-24-165858.mmd "Herunterladen") | 24.07.2025 by [Rasner David BBL](    /display/~U80865084 ) |
|  | Stichwörter  - Keine Stichwörter - [Stichwörter bearbeiten](# "Stichwörter bearbeiten")  Preview [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true&isFromPageView=true&isFromPageView=true) [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true&isFromPageView=true&isFromPageView=true) [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true&isFromPageView=true&isFromPageView=true&isFromPageView=true) [$itemLabel]($itemRenderedUrl&isFromPageView=true&isFromPageView=true&isFromPageView=true&isFromPageView=true&isFromPageView=true) |

- Ziehen Sie Dateien an diese Stelle, um sie hochzuladen, oder Dateien suchen
  ![](images/icons/wait.gif)

Datei hochladen

Dateibeschreibung

[Alle herunterladen](/pages/downloadallattachments.action?pageId=225345943 "Alle neuesten Versionen von Anhängen auf dieser Seite als einzelne zip-Datei herunterladen.")