# Agent Note：由 profile 门控的 Desktop Agent 原型品牌

状态：已实现

[English](2026-10-19-desktop-agent-prototype-brand.md) | 中文

## 问题

桌面端原型需要与 DeepSeek Harness 官方构建不同的身份，同时不能通过大范围改名破坏 Fork 与上游合并的可维护性。浏览器标题、侧栏身份和空会话首屏需要保持一致，而官方构建与普通本地构建必须保留现有行为。

## 决策

`@deepseek-ai/dsh-client-ui-brand-desktop-agent` 仅在 `DSH_CLIENT_BUILD_PROFILE` 为 `prototype` 时填充现有的 `sidebar.brand.mark`、`sidebar.brand.name` 和 `conversation.hero.brand.mark` slot。官方品牌包保持不变，仍然只在 `official` profile 下注册。

Web 插件名单同时包含两个包。每个包自行门控注册，因此组合不需要 Fork 专用的 patch 层或运行时品牌设置。嵌套的声明感知 slot 注入把三个原型填充作为一个集合安装和撤回。

构建环境识别命名的 `prototype` profile，在记录仓库版本与提交的同时设置 `DSH_CLIENT_TITLE=Desktop Agent`。`pnpm run build:prototype` 是可复现的产物构建入口；`dev:desktop:prototype` 与 `start:desktop:prototype` 把同一 profile 传入 Electron 壳。壳层在原生菜单、Welcome、About、退出、恢复、托盘和更新文案中使用该标题，同时保持官方应用身份与用户数据位置不变。

## 验证

- 包测试覆盖 profile 隔离、声明顺序、声明消失、插件卸载和宿主请求的两种标志尺寸。
- 客户端包与依赖图验证覆盖新动态包的加载和依赖声明。
- 组装 Web 启动测试区分官方、prototype 和默认品牌行为。

## 考虑过的替代方案

**重命名官方品牌包和 Desktop 应用。** 这会让原型身份扩散到上游维护的打包配置、产品 ID、更新路径和持久数据位置。保持应用身份稳定并只选择可见文案，可以避免不兼容安装并减少合并冲突。

**将品牌设为运行时设置。** 产品身份是产物验证事实，而不是用户偏好。运行时切换可能让同一构建中的壳层与浏览器身份不一致，还需要新增持久化与同步行为。

## 结果

- 上游品牌代码与文案保持不变。
- 替换临时名称或图形只需修改原型品牌包与构建 profile。
- 原型包在官方和默认构建中存在但不生效。
- 原型桌面启动会验证记录中的浏览器与 Electron 产物使用同一 profile 构建。
