# ADR 1 - Apply SOLID Principles

**Date:** 2/2/26 01:47  

## Problem Statement

La aplicación de Portfolio Web requiere una estructura de código clara, mantenible y escalable que facilite el desarrollo futuro y la reutilización de componentes.

## Decision

Se han segregado componentes, secciones y utilidades en sus propios archivos siguiendo los principios SOLID, particularmente el **Single Responsibility Principle (SRP)** y el **Open/Closed Principle (OCP)**.

## Architecture

La estructura se organiza de la siguiente manera:

- **`components/sections/`** - Componentes principales de secciones (Hero, About, Projects, Skills, etc.)
- **`components/tools/`** - Utilidades y componentes reutilizables (SmoothScroll, AnimatedBackground, LanguageToggle, etc.)
- **`components/ui/`** - Componentes de UI genéricos basados en Radix UI
- **`contexts/`** - Context API para estado global (Theme, Language)
- **`hooks/`** - Hooks personalizados (useIsMobile, useToast)
- **`lib/`** - Utilidades, traducciones y datos estáticos

## Rationale

- **Mantenibilidad:** Cada componente tiene una responsabilidad única, facilitando cambios y fixes
- **Reutilización:** Componentes genéricos pueden ser usados en múltiples lugares
- **Escalabilidad:** La estructura permite agregar nuevas secciones y componentes sin afectar los existentes
- **Testabilidad:** Componentes segregados son más fáciles de testear de forma aislada

## Consequences

### Positive
- Código más legible y organizado
- Facilita colaboración entre desarrolladores
- Reduce acoplamiento entre componentes
- Permite modificaciones independientes

### Negative
- Más archivos para navegar
- Requiere disciplina para mantener la estructura

## Alternatives Considered

1. **Estructura monolítica** - Un único componente grande (rechazado por falta de escalabilidad)
2. **Estructura por características** - Agrupar todo lo relacionado a una feature juntos (podría considerarse en futuro)

## Related

- SRP (Single Responsibility Principle)
- OCP (Open/Closed Principle)
- Component-based architecture