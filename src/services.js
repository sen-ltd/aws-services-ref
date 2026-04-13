export const CATEGORIES = [
  { id: 'compute',    name: { ja: 'コンピューティング', en: 'Compute' } },
  { id: 'storage',    name: { ja: 'ストレージ',         en: 'Storage' } },
  { id: 'database',   name: { ja: 'データベース',       en: 'Database' } },
  { id: 'networking', name: { ja: 'ネットワーク',       en: 'Networking' } },
  { id: 'security',   name: { ja: 'セキュリティ',       en: 'Security' } },
  { id: 'analytics',  name: { ja: '分析',               en: 'Analytics' } },
  { id: 'ml',         name: { ja: '機械学習',           en: 'Machine Learning' } },
  { id: 'devops',     name: { ja: '開発・運用',         en: 'Developer Tools' } },
  { id: 'messaging',  name: { ja: 'メッセージング',     en: 'Application Integration' } },
  { id: 'serverless', name: { ja: 'サーバーレス',       en: 'Serverless' } },
];

export const SERVICES = [
  // ── Compute ────────────────────────────────────────────────────────────────
  {
    id: 'ec2',
    abbrev: 'EC2',
    name: 'Amazon Elastic Compute Cloud',
    category: 'compute',
    description: {
      ja: '仮想サーバを提供するサービス。インスタンスサイズ・OS・ネットワークを自由に選択可能',
      en: 'Virtual server service with configurable instance sizes, operating systems, and networking',
    },
    useCases: {
      ja: ['Web サーバ', 'アプリケーションサーバ', 'バッチ処理', 'ゲームサーバ'],
      en: ['Web servers', 'Application servers', 'Batch processing', 'Game servers'],
    },
    launched: 2006,
    related: ['ebs', 'vpc', 'auto-scaling', 'elb'],
  },
  {
    id: 'lambda',
    abbrev: 'Lambda',
    name: 'AWS Lambda',
    category: 'serverless',
    description: {
      ja: 'サーバ管理不要でコードを実行。イベント駆動型の関数実行基盤',
      en: 'Run code without managing servers. Event-driven serverless function execution platform',
    },
    useCases: {
      ja: ['API バックエンド', 'データ処理', 'スケジュール実行', 'イベント処理'],
      en: ['API backends', 'Data processing', 'Scheduled jobs', 'Event processing'],
    },
    launched: 2014,
    related: ['api-gateway', 'step-functions', 'eventbridge', 'sqs'],
  },
  {
    id: 'ecs',
    abbrev: 'ECS',
    name: 'Amazon Elastic Container Service',
    category: 'compute',
    description: {
      ja: 'Docker コンテナのフルマネージドオーケストレーションサービス',
      en: 'Fully managed container orchestration service for Docker containers',
    },
    useCases: {
      ja: ['マイクロサービス', 'コンテナワークロード', 'CI/CD パイプライン'],
      en: ['Microservices', 'Container workloads', 'CI/CD pipelines'],
    },
    launched: 2014,
    related: ['ecr', 'fargate', 'eks', 'vpc'],
  },
  {
    id: 'eks',
    abbrev: 'EKS',
    name: 'Amazon Elastic Kubernetes Service',
    category: 'compute',
    description: {
      ja: 'マネージド Kubernetes サービス。クラスタ管理を AWS が担う',
      en: 'Managed Kubernetes service where AWS handles cluster management',
    },
    useCases: {
      ja: ['Kubernetes ワークロード', 'マイクロサービス', 'ハイブリッドデプロイ'],
      en: ['Kubernetes workloads', 'Microservices', 'Hybrid deployments'],
    },
    launched: 2018,
    related: ['ecs', 'fargate', 'ecr', 'vpc'],
  },
  {
    id: 'fargate',
    abbrev: 'Fargate',
    name: 'AWS Fargate',
    category: 'serverless',
    description: {
      ja: 'コンテナ向けサーバーレスコンピューティング。EC2 インスタンス管理不要',
      en: 'Serverless compute engine for containers. No EC2 instance management required',
    },
    useCases: {
      ja: ['サーバーレスコンテナ', 'バッチジョブ', 'スケールアウト'],
      en: ['Serverless containers', 'Batch jobs', 'Scale-out workloads'],
    },
    launched: 2017,
    related: ['ecs', 'eks', 'ecr'],
  },
  {
    id: 'lightsail',
    abbrev: 'Lightsail',
    name: 'Amazon Lightsail',
    category: 'compute',
    description: {
      ja: '固定価格のシンプルな仮想サーバ。小規模アプリや個人サイトに最適',
      en: 'Simple fixed-price virtual server. Ideal for small apps and personal sites',
    },
    useCases: {
      ja: ['個人サイト', 'WordPress', 'スタートアップ MVP'],
      en: ['Personal websites', 'WordPress', 'Startup MVPs'],
    },
    launched: 2016,
    related: ['ec2', 'amplify'],
  },
  {
    id: 'elastic-beanstalk',
    abbrev: 'EB',
    name: 'AWS Elastic Beanstalk',
    category: 'devops',
    description: {
      ja: 'アプリのデプロイ・スケーリングを自動化するマネージドプラットフォーム',
      en: 'Managed platform that automates application deployment and scaling',
    },
    useCases: {
      ja: ['Web アプリ', 'API サービス', 'PaaS スタイルのデプロイ'],
      en: ['Web applications', 'API services', 'PaaS-style deployments'],
    },
    launched: 2011,
    related: ['ec2', 'rds', 'elb'],
  },
  {
    id: 'auto-scaling',
    abbrev: 'ASG',
    name: 'AWS Auto Scaling',
    category: 'compute',
    description: {
      ja: 'トラフィックに応じて EC2 などのリソースを自動スケール',
      en: 'Automatically scale EC2 and other resources based on demand',
    },
    useCases: {
      ja: ['負荷対応', 'コスト最適化', '高可用性'],
      en: ['Traffic spikes', 'Cost optimization', 'High availability'],
    },
    launched: 2009,
    related: ['ec2', 'elb', 'cloudwatch'],
  },
  {
    id: 'batch',
    abbrev: 'Batch',
    name: 'AWS Batch',
    category: 'compute',
    description: {
      ja: '大規模バッチコンピューティングジョブを効率的に実行するマネージドサービス',
      en: 'Managed service for running large-scale batch computing jobs efficiently',
    },
    useCases: {
      ja: ['科学計算', 'レンダリング', 'データ変換'],
      en: ['Scientific computing', 'Rendering', 'Data transformation'],
    },
    launched: 2016,
    related: ['ec2', 'lambda', 'ecs'],
  },

  // ── Storage ────────────────────────────────────────────────────────────────
  {
    id: 's3',
    abbrev: 'S3',
    name: 'Amazon Simple Storage Service',
    category: 'storage',
    description: {
      ja: 'オブジェクトストレージ。静的ファイルから大規模データレイクまで対応',
      en: 'Object storage for everything from static files to large-scale data lakes',
    },
    useCases: {
      ja: ['静的サイトホスティング', 'バックアップ', 'データレイク', 'CDN オリジン'],
      en: ['Static site hosting', 'Backup', 'Data lake', 'CDN origin'],
    },
    launched: 2006,
    related: ['cloudfront', 'glacier', 'athena', 'glue'],
  },
  {
    id: 'ebs',
    abbrev: 'EBS',
    name: 'Amazon Elastic Block Store',
    category: 'storage',
    description: {
      ja: 'EC2 向けブロックストレージ。高 IOPS から大容量まで複数タイプを選択可能',
      en: 'Block storage for EC2 with multiple volume types from high IOPS to high capacity',
    },
    useCases: {
      ja: ['OS ドライブ', 'データベースストレージ', '高 IOPS アプリ'],
      en: ['OS drives', 'Database storage', 'High IOPS applications'],
    },
    launched: 2008,
    related: ['ec2', 'efs', 'backup'],
  },
  {
    id: 'efs',
    abbrev: 'EFS',
    name: 'Amazon Elastic File System',
    category: 'storage',
    description: {
      ja: '複数の EC2 から同時アクセスできるマネージドNFS ファイルシステム',
      en: 'Managed NFS file system accessible from multiple EC2 instances simultaneously',
    },
    useCases: {
      ja: ['共有ストレージ', 'コンテンツ管理', 'ビッグデータ分析'],
      en: ['Shared storage', 'Content management', 'Big data analytics'],
    },
    launched: 2016,
    related: ['ec2', 'ebs', 'fsx'],
  },
  {
    id: 'fsx',
    abbrev: 'FSx',
    name: 'Amazon FSx',
    category: 'storage',
    description: {
      ja: 'Windows・Lustre・NetApp など様々なファイルシステムをマネージドで提供',
      en: 'Fully managed file systems including Windows, Lustre, and NetApp',
    },
    useCases: {
      ja: ['Windows ワークロード', 'HPC', 'ML トレーニング'],
      en: ['Windows workloads', 'HPC', 'ML training'],
    },
    launched: 2018,
    related: ['efs', 'ebs', 'ec2'],
  },
  {
    id: 'glacier',
    abbrev: 'Glacier',
    name: 'Amazon S3 Glacier',
    category: 'storage',
    description: {
      ja: '低コストのアーカイブストレージ。長期保存に最適、取り出しに時間がかかる',
      en: 'Low-cost archive storage for long-term retention with configurable retrieval times',
    },
    useCases: {
      ja: ['長期アーカイブ', 'コンプライアンス保存', 'バックアップ'],
      en: ['Long-term archive', 'Compliance retention', 'Backup'],
    },
    launched: 2012,
    related: ['s3', 'backup'],
  },
  {
    id: 'backup',
    abbrev: 'Backup',
    name: 'AWS Backup',
    category: 'storage',
    description: {
      ja: 'AWS 全サービスのバックアップを集中管理するサービス',
      en: 'Centralized backup management across AWS services',
    },
    useCases: {
      ja: ['バックアップポリシー管理', 'コンプライアンス', 'DR'],
      en: ['Backup policy management', 'Compliance', 'Disaster recovery'],
    },
    launched: 2019,
    related: ['s3', 'ebs', 'rds', 'glacier'],
  },

  // ── Database ───────────────────────────────────────────────────────────────
  {
    id: 'rds',
    abbrev: 'RDS',
    name: 'Amazon Relational Database Service',
    category: 'database',
    description: {
      ja: 'MySQL・PostgreSQL・Oracle など主要 RDBMS のマネージドサービス',
      en: 'Managed relational database for MySQL, PostgreSQL, Oracle, and more',
    },
    useCases: {
      ja: ['Web アプリ DB', 'ERP', 'CRM'],
      en: ['Web application DB', 'ERP', 'CRM'],
    },
    launched: 2009,
    related: ['aurora', 'dynamodb', 'ec2'],
  },
  {
    id: 'aurora',
    abbrev: 'Aurora',
    name: 'Amazon Aurora',
    category: 'database',
    description: {
      ja: 'MySQL・PostgreSQL 互換の高性能マネージド DB。MySQL の最大 5 倍の性能',
      en: 'High-performance managed DB compatible with MySQL and PostgreSQL. Up to 5x MySQL performance',
    },
    useCases: {
      ja: ['高トラフィック Web アプリ', 'SaaS', 'ゲーム'],
      en: ['High-traffic web apps', 'SaaS', 'Gaming'],
    },
    launched: 2014,
    related: ['rds', 'dynamodb', 'elasticache'],
  },
  {
    id: 'dynamodb',
    abbrev: 'DynamoDB',
    name: 'Amazon DynamoDB',
    category: 'database',
    description: {
      ja: 'フルマネージド NoSQL DB。ミリ秒以下のレイテンシで任意スケールに対応',
      en: 'Fully managed NoSQL database with single-digit millisecond latency at any scale',
    },
    useCases: {
      ja: ['ゲーム', 'IoT', 'セッション管理', 'リアルタイムアプリ'],
      en: ['Gaming', 'IoT', 'Session management', 'Real-time apps'],
    },
    launched: 2012,
    related: ['lambda', 'api-gateway', 'elasticache'],
  },
  {
    id: 'elasticache',
    abbrev: 'ElastiCache',
    name: 'Amazon ElastiCache',
    category: 'database',
    description: {
      ja: 'Redis・Memcached 互換のインメモリキャッシュサービス',
      en: 'Managed in-memory cache compatible with Redis and Memcached',
    },
    useCases: {
      ja: ['セッションキャッシュ', 'DB 負荷軽減', 'リーダーボード'],
      en: ['Session cache', 'DB offloading', 'Leaderboards'],
    },
    launched: 2011,
    related: ['rds', 'dynamodb', 'ec2'],
  },
  {
    id: 'redshift',
    abbrev: 'Redshift',
    name: 'Amazon Redshift',
    category: 'database',
    description: {
      ja: 'ペタバイト規模のクラウドデータウェアハウス。OLAP クエリを高速実行',
      en: 'Petabyte-scale cloud data warehouse for fast OLAP query execution',
    },
    useCases: {
      ja: ['BI/レポーティング', 'データ分析', 'ログ分析'],
      en: ['BI/Reporting', 'Data analytics', 'Log analysis'],
    },
    launched: 2012,
    related: ['s3', 'glue', 'athena', 'quicksight'],
  },

  // ── Networking ─────────────────────────────────────────────────────────────
  {
    id: 'vpc',
    abbrev: 'VPC',
    name: 'Amazon Virtual Private Cloud',
    category: 'networking',
    description: {
      ja: 'AWS クラウド内の論理的に分離された仮想ネットワーク空間',
      en: 'Logically isolated virtual network in the AWS cloud',
    },
    useCases: {
      ja: ['ネットワーク分離', 'セキュリティグループ', 'プライベートサブネット'],
      en: ['Network isolation', 'Security groups', 'Private subnets'],
    },
    launched: 2009,
    related: ['ec2', 'direct-connect', 'transit-gateway'],
  },
  {
    id: 'cloudfront',
    abbrev: 'CloudFront',
    name: 'Amazon CloudFront',
    category: 'networking',
    description: {
      ja: 'グローバル CDN。エッジロケーションでコンテンツをキャッシュし低レイテンシ配信',
      en: 'Global CDN that caches content at edge locations for low-latency delivery',
    },
    useCases: {
      ja: ['静的アセット配信', 'API 高速化', 'ライブストリーミング'],
      en: ['Static asset delivery', 'API acceleration', 'Live streaming'],
    },
    launched: 2008,
    related: ['s3', 'waf', 'route53', 'shield'],
  },
  {
    id: 'route53',
    abbrev: 'Route 53',
    name: 'Amazon Route 53',
    category: 'networking',
    description: {
      ja: 'スケーラブルな DNS サービス。ドメイン登録・ヘルスチェック・ルーティングも統合',
      en: 'Scalable DNS service with domain registration, health checks, and routing policies',
    },
    useCases: {
      ja: ['ドメイン管理', 'フェイルオーバー', 'トラフィックルーティング'],
      en: ['Domain management', 'Failover routing', 'Traffic routing'],
    },
    launched: 2010,
    related: ['cloudfront', 'elb', 'vpc'],
  },
  {
    id: 'elb',
    abbrev: 'ELB',
    name: 'Elastic Load Balancing',
    category: 'networking',
    description: {
      ja: 'トラフィックを複数ターゲットに自動分散。ALB・NLB・CLB の 3 種類',
      en: 'Automatically distribute traffic across multiple targets. Available as ALB, NLB, or CLB',
    },
    useCases: {
      ja: ['高可用性', 'SSL 終端', 'Blue/Green デプロイ'],
      en: ['High availability', 'SSL termination', 'Blue/Green deployments'],
    },
    launched: 2009,
    related: ['ec2', 'auto-scaling', 'route53'],
  },
  {
    id: 'direct-connect',
    abbrev: 'DX',
    name: 'AWS Direct Connect',
    category: 'networking',
    description: {
      ja: 'オンプレミスから AWS への専用線接続。安定した帯域と低レイテンシを実現',
      en: 'Dedicated network connection from on-premises to AWS for consistent bandwidth and low latency',
    },
    useCases: {
      ja: ['ハイブリッドクラウド', '大容量データ転送', '規制対応'],
      en: ['Hybrid cloud', 'Large data transfers', 'Regulatory compliance'],
    },
    launched: 2011,
    related: ['vpc', 'transit-gateway'],
  },
  {
    id: 'transit-gateway',
    abbrev: 'TGW',
    name: 'AWS Transit Gateway',
    category: 'networking',
    description: {
      ja: '複数の VPC とオンプレミスをハブ型で接続するネットワークトランジットハブ',
      en: 'Hub-and-spoke network transit hub connecting multiple VPCs and on-premises networks',
    },
    useCases: {
      ja: ['マルチ VPC 接続', 'ハイブリッドネットワーク', '集中管理'],
      en: ['Multi-VPC connectivity', 'Hybrid networking', 'Centralized management'],
    },
    launched: 2018,
    related: ['vpc', 'direct-connect'],
  },
  {
    id: 'api-gateway',
    abbrev: 'APIGW',
    name: 'Amazon API Gateway',
    category: 'serverless',
    description: {
      ja: 'REST・HTTP・WebSocket API の作成・管理・保護をするマネージドサービス',
      en: 'Managed service for creating, managing, and securing REST, HTTP, and WebSocket APIs',
    },
    useCases: {
      ja: ['REST API', 'マイクロサービスゲートウェイ', 'WebSocket'],
      en: ['REST APIs', 'Microservices gateway', 'WebSocket apps'],
    },
    launched: 2015,
    related: ['lambda', 'cognito', 'waf'],
  },
  {
    id: 'appsync',
    abbrev: 'AppSync',
    name: 'AWS AppSync',
    category: 'serverless',
    description: {
      ja: 'GraphQL API のマネージドサービス。リアルタイム同期とオフライン対応',
      en: 'Managed GraphQL API service with real-time sync and offline capability',
    },
    useCases: {
      ja: ['GraphQL API', 'リアルタイムアプリ', 'モバイルバックエンド'],
      en: ['GraphQL APIs', 'Real-time apps', 'Mobile backends'],
    },
    launched: 2017,
    related: ['lambda', 'dynamodb', 'cognito'],
  },

  // ── Security ───────────────────────────────────────────────────────────────
  {
    id: 'iam',
    abbrev: 'IAM',
    name: 'AWS Identity and Access Management',
    category: 'security',
    description: {
      ja: 'AWS リソースへのアクセスを安全に管理。ユーザ・ロール・ポリシーを定義',
      en: 'Securely manage access to AWS resources through users, roles, and policies',
    },
    useCases: {
      ja: ['アクセス制御', '最小権限', '一時クレデンシャル'],
      en: ['Access control', 'Least privilege', 'Temporary credentials'],
    },
    launched: 2010,
    related: ['organizations', 'cognito', 'secrets-manager'],
  },
  {
    id: 'cognito',
    abbrev: 'Cognito',
    name: 'Amazon Cognito',
    category: 'security',
    description: {
      ja: 'Web・モバイルアプリの認証・認可・ユーザ管理サービス',
      en: 'Authentication, authorization, and user management for web and mobile apps',
    },
    useCases: {
      ja: ['ユーザ認証', 'SNS ログイン', 'モバイルアプリ認証'],
      en: ['User authentication', 'Social login', 'Mobile app auth'],
    },
    launched: 2014,
    related: ['iam', 'api-gateway', 'appsync'],
  },
  {
    id: 'waf',
    abbrev: 'WAF',
    name: 'AWS WAF',
    category: 'security',
    description: {
      ja: 'Web アプリファイアウォール。SQL インジェクションや XSS など一般的な攻撃を防御',
      en: 'Web application firewall protecting against common attacks like SQL injection and XSS',
    },
    useCases: {
      ja: ['DDoS 対策', 'ボット対策', 'API 保護'],
      en: ['DDoS protection', 'Bot mitigation', 'API protection'],
    },
    launched: 2012,
    related: ['cloudfront', 'api-gateway', 'shield'],
  },
  {
    id: 'shield',
    abbrev: 'Shield',
    name: 'AWS Shield',
    category: 'security',
    description: {
      ja: 'DDoS 攻撃からの保護サービス。Standard は無料、Advanced は高度な保護',
      en: 'DDoS protection service. Standard is free; Advanced provides enhanced protection',
    },
    useCases: {
      ja: ['DDoS 保護', '高可用性', 'ミッションクリティカルアプリ'],
      en: ['DDoS protection', 'High availability', 'Mission-critical apps'],
    },
    launched: 2016,
    related: ['waf', 'cloudfront', 'route53'],
  },
  {
    id: 'guardduty',
    abbrev: 'GuardDuty',
    name: 'Amazon GuardDuty',
    category: 'security',
    description: {
      ja: 'ML ベースの脅威検出サービス。異常なアクティビティや不正アクセスを検知',
      en: 'ML-based threat detection service identifying anomalous activity and unauthorized access',
    },
    useCases: {
      ja: ['脅威検出', 'コンプライアンス', 'セキュリティ監視'],
      en: ['Threat detection', 'Compliance', 'Security monitoring'],
    },
    launched: 2017,
    related: ['iam', 'cloudtrail', 'config'],
  },
  {
    id: 'kms',
    abbrev: 'KMS',
    name: 'AWS Key Management Service',
    category: 'security',
    description: {
      ja: '暗号化キーの作成・管理・使用を制御するマネージドサービス',
      en: 'Managed service for creating, managing, and controlling cryptographic keys',
    },
    useCases: {
      ja: ['データ暗号化', 'S3 暗号化', 'RDS 暗号化'],
      en: ['Data encryption', 'S3 encryption', 'RDS encryption'],
    },
    launched: 2014,
    related: ['secrets-manager', 'iam', 's3'],
  },
  {
    id: 'secrets-manager',
    abbrev: 'Secrets Manager',
    name: 'AWS Secrets Manager',
    category: 'security',
    description: {
      ja: 'DB パスワードや API キーなどのシークレットを安全に保存・ローテーション',
      en: 'Securely store and automatically rotate secrets like DB passwords and API keys',
    },
    useCases: {
      ja: ['DB 認証情報管理', 'API キー管理', '自動ローテーション'],
      en: ['DB credentials', 'API key management', 'Automatic rotation'],
    },
    launched: 2018,
    related: ['kms', 'iam', 'rds'],
  },
  {
    id: 'config',
    abbrev: 'Config',
    name: 'AWS Config',
    category: 'security',
    description: {
      ja: 'AWS リソースの設定変更を記録・評価し、コンプライアンスを継続監視',
      en: 'Continuously record and evaluate AWS resource configurations for compliance',
    },
    useCases: {
      ja: ['コンプライアンス監査', '変更追跡', 'セキュリティ評価'],
      en: ['Compliance auditing', 'Change tracking', 'Security assessment'],
    },
    launched: 2014,
    related: ['cloudtrail', 'guardduty', 'iam'],
  },

  // ── Analytics ──────────────────────────────────────────────────────────────
  {
    id: 'athena',
    abbrev: 'Athena',
    name: 'Amazon Athena',
    category: 'analytics',
    description: {
      ja: 'S3 上のデータを標準 SQL でクエリできるサーバーレス分析サービス',
      en: 'Serverless analytics service that queries data in S3 using standard SQL',
    },
    useCases: {
      ja: ['ログ分析', 'データレイク', 'アドホッククエリ'],
      en: ['Log analysis', 'Data lake queries', 'Ad-hoc analytics'],
    },
    launched: 2016,
    related: ['s3', 'glue', 'redshift'],
  },
  {
    id: 'glue',
    abbrev: 'Glue',
    name: 'AWS Glue',
    category: 'analytics',
    description: {
      ja: 'サーバーレスの ETL サービス。データカタログ管理と変換処理を自動化',
      en: 'Serverless ETL service with automated data catalog management and transformation',
    },
    useCases: {
      ja: ['ETL パイプライン', 'データカタログ', 'データ変換'],
      en: ['ETL pipelines', 'Data catalog', 'Data transformation'],
    },
    launched: 2017,
    related: ['s3', 'athena', 'redshift', 'emr'],
  },
  {
    id: 'emr',
    abbrev: 'EMR',
    name: 'Amazon EMR',
    category: 'analytics',
    description: {
      ja: 'Hadoop・Spark などのビッグデータフレームワークをマネージドクラスタで実行',
      en: 'Run big data frameworks like Hadoop and Spark on managed clusters',
    },
    useCases: {
      ja: ['ビッグデータ処理', 'ログ分析', 'ML パイプライン'],
      en: ['Big data processing', 'Log analytics', 'ML pipelines'],
    },
    launched: 2009,
    related: ['s3', 'glue', 'athena'],
  },
  {
    id: 'kinesis',
    abbrev: 'Kinesis',
    name: 'Amazon Kinesis',
    category: 'analytics',
    description: {
      ja: 'リアルタイムストリーミングデータの収集・処理・分析プラットフォーム',
      en: 'Real-time streaming data collection, processing, and analytics platform',
    },
    useCases: {
      ja: ['リアルタイム分析', 'ログ収集', 'クリックストリーム'],
      en: ['Real-time analytics', 'Log ingestion', 'Clickstream data'],
    },
    launched: 2013,
    related: ['lambda', 's3', 'redshift', 'glue'],
  },
  {
    id: 'quicksight',
    abbrev: 'QuickSight',
    name: 'Amazon QuickSight',
    category: 'analytics',
    description: {
      ja: 'クラウドネイティブの BI サービス。インタラクティブダッシュボードを提供',
      en: 'Cloud-native BI service with interactive dashboards and visualizations',
    },
    useCases: {
      ja: ['BI ダッシュボード', 'データ可視化', 'レポーティング'],
      en: ['BI dashboards', 'Data visualization', 'Reporting'],
    },
    launched: 2015,
    related: ['redshift', 'athena', 's3'],
  },

  // ── Machine Learning ───────────────────────────────────────────────────────
  {
    id: 'sagemaker',
    abbrev: 'SageMaker',
    name: 'Amazon SageMaker',
    category: 'ml',
    description: {
      ja: 'ML モデルの構築・学習・デプロイをエンドツーエンドで管理するプラットフォーム',
      en: 'End-to-end platform for building, training, and deploying machine learning models',
    },
    useCases: {
      ja: ['ML モデル開発', '推論エンドポイント', 'AutoML'],
      en: ['ML model development', 'Inference endpoints', 'AutoML'],
    },
    launched: 2017,
    related: ['s3', 'ec2', 'emr'],
  },
  {
    id: 'rekognition',
    abbrev: 'Rekognition',
    name: 'Amazon Rekognition',
    category: 'ml',
    description: {
      ja: '画像・動画分析サービス。物体検出・顔認識・テキスト抽出が可能',
      en: 'Image and video analysis with object detection, facial recognition, and text extraction',
    },
    useCases: {
      ja: ['顔認識', '画像モデレーション', '動画分析'],
      en: ['Facial recognition', 'Image moderation', 'Video analysis'],
    },
    launched: 2016,
    related: ['s3', 'lambda', 'sagemaker'],
  },
  {
    id: 'polly',
    abbrev: 'Polly',
    name: 'Amazon Polly',
    category: 'ml',
    description: {
      ja: 'テキストを自然な音声に変換するマネージド TTS サービス',
      en: 'Managed text-to-speech service that converts text into natural-sounding speech',
    },
    useCases: {
      ja: ['音声アシスタント', 'アクセシビリティ', '音声コンテンツ'],
      en: ['Voice assistants', 'Accessibility', 'Audio content'],
    },
    launched: 2016,
    related: ['lex', 'transcribe', 'lambda'],
  },
  {
    id: 'lex',
    abbrev: 'Lex',
    name: 'Amazon Lex',
    category: 'ml',
    description: {
      ja: 'Alexa と同じ技術で会話型 AI チャットボットを構築するサービス',
      en: 'Build conversational AI chatbots using the same technology as Alexa',
    },
    useCases: {
      ja: ['カスタマーサポート', 'チャットボット', '音声 UI'],
      en: ['Customer support', 'Chatbots', 'Voice interfaces'],
    },
    launched: 2016,
    related: ['polly', 'lambda', 'connect'],
  },
  {
    id: 'comprehend',
    abbrev: 'Comprehend',
    name: 'Amazon Comprehend',
    category: 'ml',
    description: {
      ja: '自然言語処理サービス。感情分析・エンティティ抽出・言語検出が可能',
      en: 'NLP service for sentiment analysis, entity extraction, and language detection',
    },
    useCases: {
      ja: ['レビュー分析', 'ドキュメント分類', 'コンテンツモデレーション'],
      en: ['Review analysis', 'Document classification', 'Content moderation'],
    },
    launched: 2017,
    related: ['s3', 'lambda', 'sagemaker'],
  },
  {
    id: 'bedrock',
    abbrev: 'Bedrock',
    name: 'Amazon Bedrock',
    category: 'ml',
    description: {
      ja: 'Claude・Llama など基盤モデル (FM) を API で簡単に使えるジェネレーティブ AI サービス',
      en: 'Generative AI service for easy API access to foundation models including Claude and Llama',
    },
    useCases: {
      ja: ['テキスト生成', 'チャットボット', '要約・変換'],
      en: ['Text generation', 'Chatbots', 'Summarization and transformation'],
    },
    launched: 2023,
    related: ['sagemaker', 'lambda', 'api-gateway'],
  },
  {
    id: 'transcribe',
    abbrev: 'Transcribe',
    name: 'Amazon Transcribe',
    category: 'ml',
    description: {
      ja: '音声をテキストに変換する自動音声認識 (ASR) サービス',
      en: 'Automatic speech recognition (ASR) service converting audio to text',
    },
    useCases: {
      ja: ['コールセンター分析', '字幕生成', 'ボイスメモ'],
      en: ['Call center analytics', 'Caption generation', 'Voice memos'],
    },
    launched: 2017,
    related: ['polly', 'comprehend', 's3'],
  },
  {
    id: 'translate',
    abbrev: 'Translate',
    name: 'Amazon Translate',
    category: 'ml',
    description: {
      ja: 'ニューラル機械翻訳サービス。75 以上の言語ペアに対応',
      en: 'Neural machine translation service supporting over 75 language pairs',
    },
    useCases: {
      ja: ['多言語コンテンツ', 'ユーザ生成コンテンツ翻訳', 'グローバルアプリ'],
      en: ['Multilingual content', 'User-generated content translation', 'Global apps'],
    },
    launched: 2017,
    related: ['comprehend', 'lambda', 's3'],
  },

  // ── Developer Tools / DevOps ───────────────────────────────────────────────
  {
    id: 'cloudwatch',
    abbrev: 'CloudWatch',
    name: 'Amazon CloudWatch',
    category: 'devops',
    description: {
      ja: 'AWS リソースのモニタリング・ログ収集・アラート・ダッシュボードを統合管理',
      en: 'Unified monitoring for AWS resources with logs, alarms, metrics, and dashboards',
    },
    useCases: {
      ja: ['インフラ監視', 'ログ分析', 'アラート設定'],
      en: ['Infrastructure monitoring', 'Log analysis', 'Alerting'],
    },
    launched: 2009,
    related: ['cloudtrail', 'xray', 'lambda'],
  },
  {
    id: 'cloudformation',
    abbrev: 'CFn',
    name: 'AWS CloudFormation',
    category: 'devops',
    description: {
      ja: 'Infrastructure as Code でAWS リソースをテンプレート定義・自動プロビジョニング',
      en: 'Infrastructure as Code for defining and auto-provisioning AWS resources via templates',
    },
    useCases: {
      ja: ['インフラ自動化', 'スタック管理', 'DR 環境構築'],
      en: ['Infrastructure automation', 'Stack management', 'DR environment setup'],
    },
    launched: 2011,
    related: ['systems-manager', 'codecommit', 'codepipeline'],
  },
  {
    id: 'codecommit',
    abbrev: 'CodeCommit',
    name: 'AWS CodeCommit',
    category: 'devops',
    description: {
      ja: 'マネージド Git リポジトリホスティングサービス。プライベートリポジトリを提供',
      en: 'Managed Git repository hosting with private repositories integrated into AWS',
    },
    useCases: {
      ja: ['ソースコード管理', 'CI/CD 連携', 'アクセス制御'],
      en: ['Source control', 'CI/CD integration', 'Access control'],
    },
    launched: 2015,
    related: ['codebuild', 'codedeploy', 'codepipeline'],
  },
  {
    id: 'codebuild',
    abbrev: 'CodeBuild',
    name: 'AWS CodeBuild',
    category: 'devops',
    description: {
      ja: 'サーバーレスのビルドサービス。コンパイル・テスト・アーティファクト生成を自動化',
      en: 'Serverless build service for compiling, testing, and producing deployment artifacts',
    },
    useCases: {
      ja: ['ビルド自動化', 'テスト実行', 'Docker イメージビルド'],
      en: ['Build automation', 'Test execution', 'Docker image builds'],
    },
    launched: 2016,
    related: ['codecommit', 'codedeploy', 'codepipeline', 'ecr'],
  },
  {
    id: 'codedeploy',
    abbrev: 'CodeDeploy',
    name: 'AWS CodeDeploy',
    category: 'devops',
    description: {
      ja: 'EC2・Lambda・ECS へのデプロイを自動化。Blue/Green・ローリング更新に対応',
      en: 'Automated deployments to EC2, Lambda, and ECS with Blue/Green and rolling updates',
    },
    useCases: {
      ja: ['ゼロダウンタイムデプロイ', 'Blue/Green デプロイ', 'ロールバック'],
      en: ['Zero-downtime deploys', 'Blue/Green deployments', 'Rollbacks'],
    },
    launched: 2014,
    related: ['codecommit', 'codebuild', 'codepipeline'],
  },
  {
    id: 'codepipeline',
    abbrev: 'CodePipeline',
    name: 'AWS CodePipeline',
    category: 'devops',
    description: {
      ja: 'ソースからデプロイまでの CI/CD パイプライン全体をオーケストレーション',
      en: 'Orchestrate end-to-end CI/CD pipelines from source to deployment',
    },
    useCases: {
      ja: ['CI/CD パイプライン', 'リリース自動化', 'マルチステージデプロイ'],
      en: ['CI/CD pipelines', 'Release automation', 'Multi-stage deployments'],
    },
    launched: 2015,
    related: ['codecommit', 'codebuild', 'codedeploy'],
  },
  {
    id: 'cloud9',
    abbrev: 'Cloud9',
    name: 'AWS Cloud9',
    category: 'devops',
    description: {
      ja: 'ブラウザで動作するクラウド IDE。コーディング・デバッグ・コラボレーションが可能',
      en: 'Cloud-based IDE running in the browser for coding, debugging, and collaboration',
    },
    useCases: {
      ja: ['クラウド開発', 'ペアプログラミング', 'Lambda 開発'],
      en: ['Cloud development', 'Pair programming', 'Lambda development'],
    },
    launched: 2017,
    related: ['lambda', 'codecommit', 'codebuild'],
  },
  {
    id: 'xray',
    abbrev: 'X-Ray',
    name: 'AWS X-Ray',
    category: 'devops',
    description: {
      ja: 'リクエストのトレーシングとパフォーマンス分析。分散システムのデバッグに最適',
      en: 'Request tracing and performance analysis for debugging distributed systems',
    },
    useCases: {
      ja: ['分散トレーシング', 'パフォーマンス分析', 'ボトルネック特定'],
      en: ['Distributed tracing', 'Performance analysis', 'Bottleneck identification'],
    },
    launched: 2016,
    related: ['cloudwatch', 'lambda', 'ecs'],
  },
  {
    id: 'systems-manager',
    abbrev: 'SSM',
    name: 'AWS Systems Manager',
    category: 'devops',
    description: {
      ja: 'EC2 や オンプレ環境のオペレーション管理。パッチ適用・設定管理・セッション管理',
      en: 'Operational management for EC2 and on-premises with patching, config, and session management',
    },
    useCases: {
      ja: ['パッチ管理', 'パラメータストア', 'SSH 代替セッション'],
      en: ['Patch management', 'Parameter store', 'SSH-free sessions'],
    },
    launched: 2015,
    related: ['ec2', 'cloudformation', 'secrets-manager'],
  },
  {
    id: 'ecr',
    abbrev: 'ECR',
    name: 'Amazon Elastic Container Registry',
    category: 'devops',
    description: {
      ja: 'Docker コンテナイメージのマネージドレジストリ。ECS/EKS とシームレスに統合',
      en: 'Managed Docker container registry with seamless ECS/EKS integration',
    },
    useCases: {
      ja: ['コンテナイメージ管理', 'CI/CD 連携', '脆弱性スキャン'],
      en: ['Container image management', 'CI/CD integration', 'Vulnerability scanning'],
    },
    launched: 2015,
    related: ['ecs', 'eks', 'codebuild'],
  },
  {
    id: 'amplify',
    abbrev: 'Amplify',
    name: 'AWS Amplify',
    category: 'devops',
    description: {
      ja: 'フロントエンド・モバイルアプリの開発・デプロイを加速するフルスタックプラットフォーム',
      en: 'Full-stack platform accelerating frontend and mobile app development and deployment',
    },
    useCases: {
      ja: ['フロントエンドホスティング', 'モバイル BaaS', 'GraphQL API 構築'],
      en: ['Frontend hosting', 'Mobile BaaS', 'GraphQL API building'],
    },
    launched: 2017,
    related: ['appsync', 'cognito', 's3', 'lambda'],
  },

  // ── Messaging / Application Integration ───────────────────────────────────
  {
    id: 'sqs',
    abbrev: 'SQS',
    name: 'Amazon Simple Queue Service',
    category: 'messaging',
    description: {
      ja: 'フルマネージドのメッセージキューサービス。疎結合アーキテクチャを実現',
      en: 'Fully managed message queue service enabling decoupled architectures',
    },
    useCases: {
      ja: ['非同期処理', 'マイクロサービス連携', 'バッファリング'],
      en: ['Async processing', 'Microservice decoupling', 'Buffering'],
    },
    launched: 2006,
    related: ['sns', 'lambda', 'eventbridge'],
  },
  {
    id: 'sns',
    abbrev: 'SNS',
    name: 'Amazon Simple Notification Service',
    category: 'messaging',
    description: {
      ja: 'Pub/Sub 型のマネージド通知サービス。複数のエンドポイントへ一斉配信',
      en: 'Managed pub/sub notification service for broadcasting to multiple endpoints',
    },
    useCases: {
      ja: ['プッシュ通知', 'ファンアウト', 'アラート配信'],
      en: ['Push notifications', 'Fan-out patterns', 'Alert broadcasting'],
    },
    launched: 2010,
    related: ['sqs', 'lambda', 'ses'],
  },
  {
    id: 'ses',
    abbrev: 'SES',
    name: 'Amazon Simple Email Service',
    category: 'messaging',
    description: {
      ja: 'クラウドベースのメール送信サービス。トランザクショナルメールやマーケティングメールに対応',
      en: 'Cloud email service for transactional and marketing emails at scale',
    },
    useCases: {
      ja: ['トランザクションメール', 'マーケティングメール', 'メール受信処理'],
      en: ['Transactional email', 'Marketing campaigns', 'Email receiving'],
    },
    launched: 2011,
    related: ['sns', 'lambda'],
  },
  {
    id: 'eventbridge',
    abbrev: 'EventBridge',
    name: 'Amazon EventBridge',
    category: 'messaging',
    description: {
      ja: 'サーバーレスイベントバス。AWS サービス・SaaS・カスタムアプリ間のイベントルーティング',
      en: 'Serverless event bus for routing events between AWS services, SaaS, and custom apps',
    },
    useCases: {
      ja: ['イベント駆動アーキテクチャ', 'SaaS 統合', 'スケジュール実行'],
      en: ['Event-driven architecture', 'SaaS integration', 'Scheduled execution'],
    },
    launched: 2019,
    related: ['lambda', 'sqs', 'sns', 'step-functions'],
  },
  {
    id: 'step-functions',
    abbrev: 'Step Functions',
    name: 'AWS Step Functions',
    category: 'serverless',
    description: {
      ja: '複数の Lambda やサービスをビジュアルワークフローでオーケストレーション',
      en: 'Orchestrate multiple Lambda functions and services using visual workflows',
    },
    useCases: {
      ja: ['ワークフロー自動化', 'ML パイプライン', '注文処理'],
      en: ['Workflow automation', 'ML pipelines', 'Order processing'],
    },
    launched: 2016,
    related: ['lambda', 'eventbridge', 'sqs'],
  },

  // ── Additional services ────────────────────────────────────────────────────
  {
    id: 'cloudtrail',
    abbrev: 'CloudTrail',
    name: 'AWS CloudTrail',
    category: 'security',
    description: {
      ja: 'AWS アカウントの API 呼び出しを記録する監査ログサービス',
      en: 'Audit log service recording all AWS API calls made in an account',
    },
    useCases: {
      ja: ['セキュリティ監査', 'コンプライアンス', '変更履歴追跡'],
      en: ['Security auditing', 'Compliance', 'Change history tracking'],
    },
    launched: 2013,
    related: ['cloudwatch', 'config', 'guardduty'],
  },
  {
    id: 'organizations',
    abbrev: 'Organizations',
    name: 'AWS Organizations',
    category: 'security',
    description: {
      ja: '複数の AWS アカウントをまとめて管理。ポリシー適用・請求統合を一括管理',
      en: 'Centrally manage multiple AWS accounts with unified policy enforcement and billing',
    },
    useCases: {
      ja: ['マルチアカウント管理', 'コスト管理', 'ガバナンス'],
      en: ['Multi-account management', 'Cost management', 'Governance'],
    },
    launched: 2016,
    related: ['iam', 'config', 'cloudtrail'],
  },
];

// ── Utility functions ─────────────────────────────────────────────────────────

/**
 * Find a service by abbreviation (case-insensitive).
 * @param {string} abbr
 * @returns {object|undefined}
 */
export function findByAbbrev(abbr) {
  const lower = abbr.toLowerCase();
  return SERVICES.find((s) => s.abbrev.toLowerCase() === lower);
}

/**
 * Search services by name, abbreviation, description, or use cases.
 * @param {string} query
 * @param {'ja'|'en'} lang
 * @returns {object[]}
 */
export function searchServices(query, lang = 'en') {
  const q = query.trim().toLowerCase();
  if (!q) return [...SERVICES];

  return SERVICES.filter((s) => {
    const fields = [
      s.name.toLowerCase(),
      s.abbrev.toLowerCase(),
      s.description[lang].toLowerCase(),
      ...(s.useCases[lang] || []).map((u) => u.toLowerCase()),
      s.category.toLowerCase(),
    ];
    return fields.some((f) => f.includes(q));
  });
}

/**
 * Filter services by category id.
 * @param {string} category
 * @returns {object[]}
 */
export function filterByCategory(category) {
  if (!category || category === 'all') return [...SERVICES];
  return SERVICES.filter((s) => s.category === category);
}

/**
 * Group all services by their category id.
 * @returns {Object.<string, object[]>}
 */
export function getByCategory() {
  return SERVICES.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {});
}
