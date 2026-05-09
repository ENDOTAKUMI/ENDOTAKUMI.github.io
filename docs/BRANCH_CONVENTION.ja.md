# ブランチ命名規約

このプロジェクトでは、一貫性のあるブランチ命名規則に従います。

## 基本構造

ブランチ名は以下の形式に従います：

```text
<type>/<description>
```

- `type`: ブランチの目的を示す型
- `description`: ブランチの内容を表す簡潔な説明（英語、ケバブケース）

### 例

```text
feature/user-authentication
fix/login-error
docs/api-documentation
```

## ブランチの型（Type）

ブランチの型は必須です。以下の型を使用してください：

### 主要な型

- **feature**: 新しい機能の開発

  ```text
  feature/add-payment-system
  feature/user-profile-page
  ```

- **fix** または **bugfix**: バグの修正

  ```text
  fix/null-pointer-error
  bugfix/memory-leak
  ```

- **hotfix**: 本番環境の緊急修正

  ```text
  hotfix/security-patch
  hotfix/critical-crash
  ```

### その他の型

- **docs**: ドキュメントのみの変更

  ```text
  docs/update-readme
  docs/api-reference
  ```

- **refactor**: コードのリファクタリング

  ```text
  refactor/auth-module
  refactor/database-layer
  ```

- **test**: テストの追加や修正

  ```text
  test/unit-tests
  test/integration-tests
  ```

- **perf**: パフォーマンス改善

  ```text
  perf/optimize-queries
  perf/reduce-bundle-size
  ```

- **style**: コードスタイルの変更（フォーマット、整形など）

  ```text
  style/code-formatting
  ```

- **build**: ビルドシステムや依存関係の変更

  ```text
  build/update-dependencies
  build/webpack-config
  ```

- **ci**: CI/CD設定の変更

  ```text
  ci/github-actions
  ci/add-deployment
  ```

- **chore**: その他の変更

  ```text
  chore/update-gitignore
  chore/cleanup
  ```

## 説明（Description）

- ブランチの内容を簡潔に表現
- **英語**で記述
- **ケバブケース**（小文字とハイフン）を使用
- 動詞で始めることを推奨（例：`add-`, `fix-`, `update-`）
- 簡潔で分かりやすい名前にする（3〜5単語程度）

### 良い例

```text
feature/user-authentication
fix/login-validation-error
docs/contributing-guide
refactor/api-error-handling
```

### 悪い例

```text
feature/new_feature        # アンダースコアではなくハイフンを使用
fix/Fix-Login-Error        # 小文字を使用
feature/機能追加            # 英語を使用
docs/update                # より具体的に
```

## Issue番号を含める場合（オプション）

GitHubやJiraなどのIssue番号を含める場合は、説明の最後に追加できます：

```text
<type>/<description>-<issue-number>
```

### 方法1: 説明の最後に追加

```text
feature/user-auth-123
fix/login-error-456
docs/api-docs-789
```

または、説明の前に追加する方法もあります：

```text
<type>/<issue-number>-<description>
```

### 方法2: 説明の前に追加

```text
feature/123-user-auth
fix/456-login-error
```

## 特殊なブランチ

プロジェクトでは以下の特殊なブランチを使用する場合があります：

- **main** または **master**: 本番環境用のメインブランチ
- **develop**: 開発用の統合ブランチ（使用する場合）
- **release/x.x.x**: リリース準備用ブランチ

## ブランチ作成のベストプラクティス

1. **明確な目的**: 1つのブランチで1つの目的に集中
2. **短命**: ブランチは可能な限り早くマージ
3. **最新の状態**: 定期的にメインブランチの変更を取り込む
4. **削除**: マージ後は速やかにブランチを削除

## ブランチの例

### 新機能開発

```bash
git checkout -b feature/add-user-dashboard
git checkout -b feature/payment-integration
```

### バグ修正

```bash
git checkout -b fix/navbar-responsive-issue
git checkout -b bugfix/data-validation
```

### ドキュメント更新

```bash
git checkout -b docs/setup-instructions
git checkout -b docs/api-documentation
```

### コードのリファクタリング

```bash
git checkout -b refactor/auth-service
git checkout -b refactor/database-queries
```

### 緊急修正

```bash
git checkout -b hotfix/security-vulnerability
git checkout -b hotfix/production-crash
```

## 注意事項

- **ブランチ名は英語で記載してください**
- 一貫性を保つため、チーム内で命名規則を統一してください
- ブランチ名は短く、分かりやすくしてください
- スペースや特殊文字は使用せず、ケバブケースを使用してください
- 現在作業しているブランチが何であるかを常に意識してください
