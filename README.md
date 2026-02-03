# EA-IMMO - Fachliche Sicht Immobilien BBL

Einheitliches Datenmodell und Geschäftsobjekte für das Immobilienmanagement des BBL (Bundesamt für Bauten und Logistik).

[![Konzeptuelles Datenmodell - Bubble Chart](assets/Preview.JPG)](https://bbl-dres.github.io/ea-immo/)

**[Interaktive Visualisierung öffnen](https://bbl-dres.github.io/ea-immo/)**

## Ziel

Dieses Repository definiert zentrale Geschäftsobjekte (Gebäude, Räume, Mietverträge, etc.) in einer standardkonformen, systemunabhängigen Sprache. Es dient als verbindliche Referenz für Fach- und IT-Bereiche.

![The Blind Men and the Elephant](assets/Studie_-_Fachliche_Sicht_IMMO__Archiv/211585695.png)

## Domänengruppen

![Domänengruppen IMMO](assets/Studie_-_Fachliche_Sicht_IMMO__Archiv/vorschlag_domaenengruppen_immo.png)

| Domäne | Beschreibung | Priorität | Konzepte | Status |
|--------|--------------|-----------|----------|--------|
| [Architektonische Sicht](docs/Architektonische%20Sicht.md) | Physische Strukturen (Grundstücke, Gebäude, Räume, Anlagen) | Muss | 48 | Definiert |
| [Projektmanagement](docs/Projektmanagement.md) | Planung und Realisierung von Bauvorhaben | Muss | 32 | Definiert |
| [Dokumentenmanagement](docs/Dokumentenmanagement.md) | Strukturierte Erfassung und Verwaltung von Dokumenten | Muss | 11 | Definiert |
| [Mietermanagement](docs/Mietermanagement%20%28Nutzungssicht%29.md) | Nutzungs- und vermietungsbezogene Aspekte | Muss | 24 | Definiert |
| [Energie und Ressourcen](docs/Energie%20und%20Ressourcen.md) | Verbrauchsdaten, Emissionen, Nachhaltigkeit | Muss | 16 | Definiert |
| [Organisatorische Daten](docs/Organisatorische%20Daten%20%28MDM%29.md) | Master Data Management | Sollte | 6 | Definiert |
| [Workspace Management](docs/Workspace%20Management.md) | Benutzer- und Kundenerfahrung | Sollte | – | Entwurf |
| [Finanzen](docs/Finanzen.md) | Buchhalterische und wirtschaftliche Perspektive | Sollte | – | Entwurf |
| Controlling, Analytics und Reporting | Berichtswesen und Analysen | Sollte | – | Entwurf |
| [Portfoliomanagement](docs/Portfoliomanagement.md) | Strategische Sicht auf das Immobilienportfolio | Könnte | – | Entwurf |
| Objektmanagement | Technisches Gebäudemanagement | Könnte | – | Entwurf |
| Baustellenmanagement | Bauausführung und Bauüberwachung | Könnte | – | Entwurf |
| [Metadaten](docs/Metadaten.md) | Metadaten-Definitionen | – | – | Entwurf |

**Total: 137 Konzepte** in 6 definierten Domänen

## Weitere Dokumentation

- [Analyse - Übersicht Standards IMMO](docs/Analyse%20-%20%C3%9Cbersicht%20Standards%20IMMO.md) - Relevante Branchenstandards
- [Studie - Fachliche Sicht IMMO (Archiv)](docs/Studie%20-%20Fachliche%20Sicht%20IMMO%20%28Archiv%29.md) - Ursprüngliche Studie

## Grundsätze

1. **Fach ist im Lead** - Definitionen unabhängig von IT-Systemen
2. **Standardkonformität** - Ausrichtung an ISO, RICS, SIA, eCH
3. **Einheitliche Terminologie** - Verbindliche Fachsprache
4. **Prozessorientierung** - Unterstützung realer Geschäftsprozesse

## Migration

Confluence-Export zu Markdown: siehe [scripts/README.md](scripts/README.md)
