# Chapter 1. Foundations


## History and Intellectual Lineage | 历史与思想脉络

> Goal: 建立 AI 的历史感，理解每一次范式转移背后的假设变化。  
> Deliverable: 写一篇综述，或者做一次 10 分钟分享，讲清 AI 的几次浪潮与瓶颈。

- 达特茅斯会议（1956）
- 物理符号系统假说
- 通用问题求解器（GPS）
- 专家系统：知识库、推理机、规则系统
- LISP 与早期 AI 编程思想
- 感知器
- 从知识驱动到数据驱动的范式转变
- 从特征工程到表示学习
- 从监督学习到自监督学习与生成式 AI
- AI 发展的几次浪潮与瓶颈

## Mathematics and Classical Machine Learning | 数学与经典机器学习

> Goal: 建立所有后续模块的数学和统计基础。  
> Deliverable: 能独立推导基础模型、损失函数与优化过程。

### Mathematics | 数学基础

- 线性代数
- 微积分
- 概率论与统计
- 信息论基础
- 最优化基础
- 矩阵微分
- SVD / 特征值分解
- 拉格朗日乘子与对偶
- 凸优化基础

### Classical Machine Learning | 经典机器学习

- 有监督 / 无监督 / 半监督学习
- 线性回归 / 逻辑回归
- 决策树 / 随机森林 / AdaBoost / 集成学习
- SVM / 核函数
- 贝叶斯网络 / 概率图模型
- 隐马尔可夫模型（HMM）/ 马尔可夫随机场（MRF）
- 流形学习 / 度量学习 / 稀疏学习 / 压缩感知
- 遗传算法
- 模仿学习
- 强化学习与动态规划基础

### Implementation Skills | 实现能力

- 前向传播手动推导
- 反向传播手动推导
- 用 Python / NumPy 手写简单神经网络
- 训练、验证、测试的基本范式
- 过拟合 / 欠拟合分析
- 偏差-方差权衡

## Deep Learning Core | 深度学习核心

> Goal: 理解现代深度学习为何有效，以及训练为什么稳定或不稳定。  
> Deliverable: 能独立讲清一个训练栈的组成，并实现一个完整实验。

### Basic Mechanisms | 基础机制

- 神经元工作原理
- 多层感知机（MLP）
- 激活函数：Sigmoid / Tanh / ReLU / GELU
- 损失函数
- 参数初始化
- 梯度消失与梯度爆炸
- 残差连接
- 归一化方法：BatchNorm / LayerNorm / RMSNorm
- 正则化：Dropout / 权重衰减

### Optimization and Training | 优化与训练

- SGD / Momentum / RMSProp / Adam / AdamW
- 学习率调度
- 梯度裁剪
- Mixed Precision Training
- Loss Scaling
- Checkpointing
- Activation Checkpointing

### Canonical Architectures | 经典网络

- CNN：LeNet / AlexNet / VGG / ResNet / Inception
- RNN / LSTM / GRU
- AutoEncoder / VAE / GAN
- seq2seq

### Training Paradigms | 训练范式

- 预训练
- 迁移学习
- 微调
- 自监督学习基础
- 联邦学习（了解）
- 强化学习

## Reinforcement Learning | 强化学习

> Goal: 理解序贯决策和大模型对齐之间的桥梁。  
> Deliverable: 能解释 PPO、RLHF 与 Agent 决策流程的关系。

### Basic Theory | 基础理论

- Bandit
- MDP
- Bellman 方程
- 动态规划
- Temporal Difference

### Mainstream Methods | 主流方法

- Q-Learning / DQN
- Policy Gradient
- Actor-Critic
- PPO
- Offline RL
- Model-based RL（了解）

### RL in the LLM Era | 与大模型的关系

- RLHF
- Reward Modeling
- Agent 与 RL 的关系
- Tool-use / planning 中的序贯决策视角
