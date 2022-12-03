---
title: 升级工作负载
---

如果 Docker Hub 发布新版本的应用程序镜像，你可以将运行旧版应用程序的工作负载升级到新版本。

1. 在左上角，单击 **☰ > 集群管理**。
1. 转到要升级工作负载的集群，然后单击 **Explore**。
1. 在左侧导航栏中，单击**工作负载**。

1. 找到要升级的工作负载并选择 **⋮ > 编辑配置**。

1. 更新**容器镜像**和要更改的选项。

1. 查看和编辑工作负载的**扩展/升级策略**。

   这些选项能控制升级如何在运行的容器中进行。例如，对于可扩展的 deployment，你可以选择是否要在部署新 Pod 之前停止旧 Pod，以及选择升级的批数量。

1. 单击**保存**。

**结果**：工作负载会根据你的设置来升级容器。请注意，扩展 deployment 或更新升级/扩展策略不会导致 Pod 重新创建。