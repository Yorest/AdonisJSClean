# 🏛️ AdonisJSClean — Arquitectura Limpia (Clean Architecture) para AdonisJS v6

![AdonisJS v6](https://img.shields.io/badge/AdonisJS-v6-5A45FF?style=for-the-badge&logo=adonisjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Clean Architecture](https://img.shields.io/badge/Architecture-Clean%20%2F%20Hexagonal-008080?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**AdonisJSClean** es una plantilla y arquitectura de referencia diseñada para construir aplicaciones web escalables, robustas y altamente testeables utilizando **AdonisJS v6 (TypeScript)** bajo los principios de **Clean Architecture (Arquitectura Limpia)** y **Arquitectura Hexagonal (Puertos y Adaptadores)**.

El objetivo principal de este repositorio es desacoplar las reglas de negocio (Dominio y Aplicación) de los detalles de infraestructura (HTTP, Bases de Datos con Lucid ORM, Framework, APIs externas), garantizando un código de largo plazo, fácil de mantener y con un alto nivel de cobertura de pruebas unitarias y de integración.

---

## 📑 Índice de Contenidos

1. [¿Por qué Clean Architecture en AdonisJS?](#-por-qué-clean-architecture-en-adonisjs)
2. [Arquitectura del Sistema y Capas](#-arquitectura-del-sistema-y-capas)
3. [Estructura de Directorios](#-estructura-de-directorios)
4. [Inversión de Dependencias con IoC Container](#-inversión-de-dependencias-con-ioc-container)
5. [Flujo de una Petición (Request Lifecycle)](#-flujo-de-una-petición-request-lifecycle)
6. [Ejemplo Práctico de Implementación (End-to-End)](#-ejemplo-práctico-de-implementación-end-to-end)
   - [1. Capa de Dominio (Entity & Interface)](#1-capa-de-dominio-entity--interface)
   - [2. Capa de Aplicación (Use Case & DTO)](#2-capa-de-aplicación-use-case--dto)
   - [3. Capa de Infraestructura (Lucid Repository & IoC Binding)](#3-capa-de-infraestructura-lucid-repository--ioc-binding)
   - [4. Capa de Presentación (VineJS Validator & Controller)](#4-capa-de-presentación-vinejs-validator--controller)
7. [Requisitos e Instalación](#-requisitos-e-instalación)
8. [Comandos Esenciales de Adonis (Ace CLI)](#-comandos-esenciales-de-adonis-ace-cli)
9. [Estrategia de Testing (Japa)](#-estrategia-de-testing-japa)
10. [Buenas Prácticas y Convenciones](#-buenas-prácticas-y-convenciones)
11. [Licencia](#-licencia)

---

## 🎯 ¿Por qué Clean Architecture en AdonisJS?

AdonisJS v6 es un framework altamente de opinión (*opinionated*) que ofrece herramientas excepcionales listas para usar (**Lucid ORM**, **VineJS**, **IoC Container**, **Vite**). Sin embargo, en aplicaciones empresariales de mediana o gran escala, acoplar la lógica de negocio directamente dentro de los Controladores o en los Modelos de Lucid puede generar problemas a largo plazo:

- **Dificultad en Pruebas Unitarias:** Probar la lógica de negocio requiere inicializar la base de datos y el contexto HTTP.
- **Acoplamiento al ORM:** Cambiar o refactorizar estructuras de persistencia afecta directamente las reglas del negocio.
- **Código Duplicado:** Lógica dispersa entre controladores, hooks del ORM y servicios monolíticos.

### Ventajas de AdonisJSClean
- ✅ **Agnóstico de la Persistencia:** El dominio desconoce si los datos provienen de PostgreSQL, MySQL o un servicio externo.
- ✅ **Pruebas Unitarias Instantáneas:** Los *Use Cases* se prueban en milisegundos inyectando *Mocks/Fakes* de repositorios en memoria.
- ✅ **Aprovechamiento Nativo de AdonisJS v6:** Utiliza `@inject()` para la inyección de dependencias de puertos a adaptadores de infraestructura sin librerías externas de DI.

---

## 🏗️ Arquitectura del Sistema y Capas

La arquitectura se divide en **4 capas concéntricas**. La regla de oro es la **Regla de Dependencia**: *Las dependencias del código fuente solo pueden apuntar hacia adentro (de las capas externas hacia las capas internas)*.
