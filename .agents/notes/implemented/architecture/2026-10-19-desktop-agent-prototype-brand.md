# Agent Note: Profile-gated Desktop Agent prototype brand

Status: implemented

English | [中文](2026-10-19-desktop-agent-prototype-brand.zh.md)

## Problem

The desktop prototype needs an identity distinct from the official DeepSeek Harness build without turning an upstream-friendly fork into a broad rename. The browser title, sidebar identity, and blank-conversation hero must agree, while official and ordinary local builds keep their existing behavior.

## Decision

`@deepseek-ai/dsh-client-ui-brand-desktop-agent` occupies the existing `sidebar.brand.mark`, `sidebar.brand.name`, and `conversation.hero.brand.mark` slots only when `DSH_CLIENT_BUILD_PROFILE` is `prototype`. The official brand package remains unchanged and continues to register only for `official`.

The Web roster includes both packages. Each package gates its own registrations, so composition does not require a fork-specific patch layer or a runtime brand setting. Nested declaration-aware slot injection installs and withdraws the three prototype occupants as one set.

The build environment recognizes a named `prototype` profile that records repository version and commit alongside `DSH_CLIENT_TITLE=Desktop Agent`. `pnpm run build:prototype` is the reproducible artifact entry point; `dev:desktop:prototype` and `start:desktop:prototype` carry the same profile into the Electron shell. The shell uses that title for native menus, Welcome, About, quit, recovery, tray, and update copy while retaining its official application identity and user-data location.

## Verification

- Package tests cover profile isolation, declaration order, declaration collapse, plugin teardown, and both host-requested mark sizes.
- Client package and dependency graph verifiers cover the new dynamic package's loading and dependency declarations.
- The assembled Web boot test distinguishes official, prototype, and default brand behavior.

## Alternatives considered

**Rename the official brand package and Desktop application.** This would spread prototype identity through upstream-owned packaging, product IDs, update paths, and persistent data locations. Keeping the application identity stable and selecting only visible copy avoids incompatible installations and reduces merge conflicts.

**Make branding a runtime setting.** Product identity is an artifact qualification fact, not a user preference. A runtime switch could mix shell and browser identities inside one build and would require new persistence and synchronization behavior.

## Consequences

- Upstream brand code and copy remain untouched.
- Replacing the temporary name or artwork stays local to the prototype brand package and build profile.
- The prototype package is present but inert in official and default builds.
- Prototype desktop start validates that the recorded browser and Electron artifacts were built under the same profile.
