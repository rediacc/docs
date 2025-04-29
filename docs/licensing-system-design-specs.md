---
sidebar_position: 4
title: Licensing System Design Specifications
description: Comprehensive design specifications for the Licensing System web application
---

# Licensing System Design Specifications

## Introduction

This document outlines the comprehensive design specifications for the Licensing System web application. The system is designed to manage software licensing, sales tracking, and profit distribution according to the company's business model.

The Licensing System implements a unique collaboration model where experts contribute to the company's success and receive compensation through fixed payments, performance-based incentives, and equity ownership opportunities.

## Database Structure

The system is built on a relational database with the following core entities:

### Core Entities
- Companies and Users (Experts/Founders)
- Teams and Team Members
- Products, Features, and Licenses
- Customers and Sales Records
- Agents and Commission Tracking
- Profit Calculation and Distribution
- Performance Reviews and Payouts
- Equity Management and Dividends

## System Architecture

### Frontend
- React.js with TypeScript
- Material-UI component library
- Redux for state management
- Chart.js for data visualization
- Formik for form handling

### Backend
- ASP.NET Core Web API
- Entity Framework Core for data access
- SQL Server database
- JWT authentication
- Azure hosting environment

## Navigation Structure

The application is organized into six main sections, each containing related sub-sections:

### 1. Dashboard

#### 1.1. Overview
- **Purpose:** Main landing page providing a snapshot of system health and key metrics
- **Components:**
  - Total active licenses counter
  - Quarterly sales chart
  - Quarterly profit distribution pie chart
  - Top-performing experts table
  - Recent sales activities feed
  - Pending payouts notification panel
  - System alerts and notices

#### 1.2. Key Performance Indicators
- **Purpose:** Detailed performance indicators with drill-down capabilities
- **Components:**
  - Sales vs targets comparison charts
  - Customer acquisition rate trends
  - Agent performance rankings
  - Expert performance metrics
  - Product performance analysis
  - Profit margin trend analysis

### 2. Products

#### 2.1. Product Catalog
- **Purpose:** Manage product offerings
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | ProductId | int | Auto-generated primary key |
  | CompanyId | int | Foreign key to Company |
  | Name | nvarchar(100) | Required product name |
  | Description | nvarchar(max) | Optional product description |
  | CreatedDate | datetime | Automatic timestamp |
  | Active | bit | Status flag (1=active, 0=inactive) |

- **Operations:**
  - Create new products
  - View product details
  - Edit product information
  - Deactivate obsolete products
  - Associate features with products

#### 2.2. Product Features
- **Purpose:** Manage features available for each product
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | ProductFeatureId | int | Auto-generated primary key |
  | ProductId | int | Foreign key to Product |
  | FeatureName | nvarchar(100) | Required feature name |
  | Description | nvarchar(max) | Optional feature description |
  | CreatedDate | datetime | Automatic timestamp |
  | Active | bit | Status flag (1=active, 0=inactive) |

- **Operations:**
  - Create new features
  - View feature details
  - Edit feature information
  - Deactivate obsolete features
  - Bulk manage multiple features
  - Generate feature comparison matrix

#### 2.3. License Management
- **Purpose:** Create and manage licenses for customers
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | LicenseId | int | Auto-generated primary key |
  | ProductId | int | Foreign key to Product |
  | CustomerId | int | Foreign key to Customer |
  | LicenseKey | nvarchar(100) | Generated unique key |
  | IssueDate | datetime | Default to current date |
  | ExpiryDate | datetime | Optional, future date |
  | MaxUsers | int | Optional, numeric user limit |
  | Trial | bit | Boolean flag for trial license |
  | Active | bit | Status flag (1=active, 0=inactive) |

- **Operations:**
  - Generate new licenses
  - Configure enabled features per license
  - Manage license renewals
  - Convert trial licenses to paid
  - Activate/deactivate licenses
  - Track license usage and compliance

### 3. Sales

#### 3.1. Sales Dashboard
- **Purpose:** Overview of sales performance
- **Components:**
  - Sales by product bar chart
  - Sales by agent pie chart
  - Sales by expert referral leaderboard
  - Sales trends line chart
  - Trial conversion rate metrics
  - Top customers list

#### 3.2. Customers
- **Purpose:** Manage customer information
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | CustomerId | int | Auto-generated primary key |
  | CompanyId | int | Foreign key to Company |
  | Name | nvarchar(100) | Required customer name |
  | Email | nvarchar(100) | Optional email address |
  | Phone | nvarchar(20) | Optional phone number |
  | Address | nvarchar(max) | Optional mailing address |
  | CreatedDate | datetime | Automatic timestamp |
  | Active | bit | Status flag (1=active, 0=inactive) |

- **Operations:**
  - Create new customer profiles
  - View and edit customer information
  - Track customer licenses
  - Review customer purchase history
  - Manage customer communications

#### 3.3. Agents
- **Purpose:** Manage external sales agents
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | AgentId | int | Auto-generated primary key |
  | CompanyId | int | Foreign key to Company |
  | Name | nvarchar(100) | Required agent name |
  | Email | nvarchar(100) | Optional email address |
  | Phone | nvarchar(20) | Optional phone number |
  | Address | nvarchar(max) | Optional mailing address |
  | CommissionRate | decimal(5,2) | Percentage, default 35% |
  | UserId | int | Optional foreign key if agent is also an expert |
  | CreatedDate | datetime | Automatic timestamp |
  | Active | bit | Status flag (1=active, 0=inactive) |

- **Operations:**
  - Register new agents
  - Manage agent profiles
  - Set custom commission rates
  - Track agent sales performance
  - Calculate and report agent commissions

#### 3.4. Sales Records
- **Purpose:** Manage and track individual sales
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | SaleId | int | Auto-generated primary key |
  | LicenseId | int | Foreign key to License |
  | SaleDate | datetime | Date/time of sale |
  | Amount | decimal(18,2) | Sale amount |
  | Currency | nvarchar(3) | Default "USD" |
  | ReferralUserId | int | Optional foreign key to referring expert |
  | AgentId | int | Optional foreign key to selling agent |
  | QuarterPeriod | nvarchar(7) | Format: "YYYY-QX" |

- **Operations:**
  - Record new sales
  - Track sales deductions
  - Calculate profit distribution
  - Generate sales reports
  - Track referral sources
  - Manage related invoices

### 4. Finance

#### 4.1. Profit Calculation
- **Purpose:** Calculate and view profit distribution for each sale
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | ProfitId | int | Auto-generated primary key |
  | SaleId | int | Foreign key to Sale |
  | GrossAmount | decimal(18,2) | Original sale amount |
  | TotalDeductions | decimal(18,2) | Sum of all deductions |
  | NetProfit | decimal(18,2) | Gross - Deductions |
  | CapitalShare | decimal(18,2) | 15% of NetProfit |
  | ReferralCommission | decimal(18,2) | 20% of NetProfit if applicable |
  | TeamShare | decimal(18,2) | Remaining after CapitalShare and ReferralCommission |
  | CalculationDate | datetime | Timestamp of calculation |
  | QuarterPeriod | nvarchar(7) | Format: "YYYY-QX" |

- **Key Formulas:**
  ```
  TotalDeductions = Sum(All SaleDeduction.Amount for the SaleId)
  NetProfit = GrossAmount - TotalDeductions
  CapitalShare = NetProfit × 0.15
  ReferralCommission = (ReferralUserId exists) ? (NetProfit × 0.20) : 0
  TeamShare = NetProfit - CapitalShare - ReferralCommission
  ```

- **Operations:**
  - Calculate profit distribution automatically
  - View detailed breakdown of calculations
  - Adjust calculations manually with proper authorization
  - Generate profit reports by period
  - Track profit trends over time

#### 4.2. Quarterly Payouts
- **Purpose:** Manage quarterly distribution of profits to experts
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | QuarterlyPayoutId | int | Auto-generated primary key |
  | QuarterPeriod | nvarchar(7) | Format: "YYYY-QX" |
  | TotalNetProfit | decimal(18,2) | Sum of all profits in quarter |
  | TotalCapitalShare | decimal(18,2) | Sum of all capital shares |
  | TotalReferralCommission | decimal(18,2) | Sum of all referral commissions |
  | TotalTeamShare | decimal(18,2) | Sum of all team shares |
  | FixedPayPool | decimal(18,2) | 25% of TotalTeamShare |
  | PerformancePool | decimal(18,2) | 75% of TotalTeamShare |
  | CalculationDate | datetime | Timestamp of calculation |
  | Finalized | bit | Status flag (1=finalized, 0=draft) |

- **Key Formulas:**
  ```
  FixedPayPool = TotalTeamShare × 0.25
  PerformancePool = TotalTeamShare × 0.75
  ```

- **Operations:**
  - Calculate quarterly pools
  - View quarterly financial summaries
  - Finalize quarterly distributions
  - Generate quarterly financial reports
  - Compare performance across quarters

#### 4.3. Expert Payouts
- **Purpose:** Calculate and track individual payments to experts
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | ExpertPayoutId | int | Auto-generated primary key |
  | QuarterlyPayoutId | int | Foreign key to QuarterlyPayout |
  | UserId | int | Foreign key to expert User |
  | FixedPay | decimal(18,2) | Expert's share of FixedPayPool |
  | PerformancePay | decimal(18,2) | Expert's share of PerformancePool |
  | ReferralCommission | decimal(18,2) | Sum of expert's referral commissions |
  | TotalPayout | decimal(18,2) | Sum of all payment components |
  | PaymentDate | datetime | When payment was issued |
  | PaymentStatus | nvarchar(20) | 'Pending', 'Paid', or 'Cancelled' |

- **Key Formulas:**
  ```
  // Fixed Pay Calculation
  TotalCoefficientSum = Sum(All Active Expert Coefficients)
  ExpertFixedPayShare = (Expert's Coefficient ÷ TotalCoefficientSum) × FixedPayPool
  ExpertFixedPay = Min(ExpertFixedPayShare, 25000)
  
  // Performance Pay Calculation
  ExpertPerformancePay = Min(ExpertFixedPay × Expert's Performance Percentage, 75000)
  
  // Total Payout
  TotalPayout = FixedPay + PerformancePay + ReferralCommission
  ```

- **Operations:**
  - Calculate individual expert payouts
  - Process payments to experts
  - Track payment history
  - Generate payment reports
  - Handle payment disputes or adjustments

#### 4.4. Dividends
- **Purpose:** Manage dividend payments to equity holders
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | DividendId | int | Auto-generated primary key |
  | QuarterPeriod | nvarchar(7) | Format: "YYYY-QX" |
  | TotalAmount | decimal(18,2) | Total dividend amount |
  | DeclaredDate | datetime | When dividend was declared |
  | PaymentDate | datetime | When dividend was paid |
  | Status | nvarchar(20) | 'Declared', 'Paid', or 'Cancelled' |

- **Operations:**
  - Declare quarterly dividends
  - Calculate individual dividend amounts
  - Process dividend payments
  - Track dividend history
  - Generate dividend reports

### 5. Team

#### 5.1. Team Management
- **Purpose:** Create and manage teams
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | TeamId | int | Auto-generated primary key |
  | CompanyId | int | Foreign key to Company |
  | Name | nvarchar(100) | Required team name |
  | CreatedDate | datetime | Automatic timestamp |
  | Active | bit | Status flag (1=active, 0=inactive) |

- **Operations:**
  - Create new teams
  - Manage team composition
  - Add/remove team members
  - Track team performance
  - View team assignment history

#### 5.2. Expert Directory
- **Purpose:** Manage expert information and settings
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | UserId | int | Auto-generated primary key |
  | CompanyId | int | Foreign key to Company |
  | Email | nvarchar(100) | Required, unique email |
  | Name | nvarchar(100) | Optional display name |
  | PasswordHash | binary(32) | Encrypted password |
  | Salt | nvarchar(100) | Password salt |
  | UserType | nvarchar(20) | 'Expert', 'Founder', etc. |
  | StartDate | datetime | When expert joined |
  | ExpertCoefficient | decimal(5,2) | Determines fixed pay share |
  | PerformancePercentage | decimal(5,2) | For performance calculations |
  | CreatedDate | datetime | Automatic timestamp |
  | LastModifiedDate | datetime | Last update timestamp |
  | Activated | bit | Account activation status |

- **Operations:**
  - Register new experts
  - Update expert profiles
  - Manage expert coefficients
  - Set performance percentages
  - Track expert contribution history
  - Generate expert performance reports

#### 5.3. Performance Reviews
- **Purpose:** Conduct and manage expert performance evaluations
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | PerformanceReviewId | int | Auto-generated primary key |
  | UserId | int | Expert being reviewed |
  | ReviewerId | int | Who performed the review |
  | ReviewType | nvarchar(20) | 'Manager', 'Peer', 'Self', or 'AI' |
  | QuarterPeriod | nvarchar(7) | Format: "YYYY-QX" |
  | Achievements | nvarchar(max) | Accomplishments and strengths |
  | ImprovementAreas | nvarchar(max) | Areas for improvement |
  | OverallRating | int | 1-5 scale rating |
  | PromotionReady | bit | Boolean promotion readiness |
  | PromotionJustification | nvarchar(max) | Reasoning for promotion |
  | ReviewDate | datetime | When review was submitted |

- **Operations:**
  - Create performance review forms
  - Conduct multi-source evaluations
  - Submit and track reviews
  - Calculate composite review scores
  - Generate performance summaries
  - Track promotion recommendations

#### 5.4. Equity Management
- **Purpose:** Track equity ownership for founding experts
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | ExpertEquityId | int | Auto-generated primary key |
  | UserId | int | Foreign key to expert User |
  | EquityPercentage | decimal(5,2) | Default 1% for founding experts |
  | GrantDate | datetime | When equity was granted |
  | VestingDate | datetime | When equity fully vests |
  | Active | bit | Status flag (1=active, 0=inactive) |

- **Key Rules:**
  - First 10 experts receive 1% equity each
  - Equity vests after 1 year from start date
  - Equity provides dividend rights but not management rights
  - Equity can be sold or transferred with Founder approval

- **Operations:**
  - Grant equity to qualifying experts
  - Track equity vesting schedule
  - Calculate dividend distributions
  - Record equity transfers
  - Generate equity reports

### 6. Administration

#### 6.1. User Management
- **Purpose:** Manage system users and permissions
- **Operations:**
  - Create system users
  - Assign roles and permissions
  - Reset passwords
  - Manage account status
  - Monitor user activity

#### 6.2. Company Settings
- **Purpose:** Manage company-specific configuration
- **Operations:**
  - Update company information
  - Configure company branding
  - Set default payment methods
  - Manage notification preferences
  - Customize company policies

#### 6.3. System Configuration
- **Purpose:** Manage global system settings
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | SettingId | int | Auto-generated primary key |
  | SettingKey | nvarchar(100) | Unique setting identifier |
  | SettingValue | nvarchar(max) | Setting value |
  | Description | nvarchar(max) | Setting description |
  | LastModified | datetime | Last update timestamp |
  | ModifiedBy | int | User who last changed setting |

- **Key System Settings:**
  | Setting Key | Default Value | Description |
  |-------------|---------------|-------------|
  | CapitalSharePercentage | 15.00 | Percentage for capital share |
  | ReferralCommissionPercentage | 20.00 | Percentage for referral commission |
  | FixedPayPercentage | 25.00 | Percentage of team share for fixed pay |
  | PerformancePayPercentage | 75.00 | Percentage of team share for performance pay |
  | MaxFixedPayPerExpert | 25000.00 | USD cap on quarterly fixed pay |
  | MaxPerformancePayPerExpert | 75000.00 | USD cap on quarterly performance pay |
  | DefaultAgentCommission | 35.00 | Default agent commission percentage |
  | ExpertEquityPercentage | 1.00 | Default equity percentage for founding experts |
  | MinimumSalesForPromotion | 100000.00 | Minimum sales before allowing promotions |
  | MinimumExpertsForPromotion | 7 | Minimum experts before allowing promotions |
  | ContractDuration | 8 | Contract duration in years |
  | ContractEndAmount | 15000000.00 | Net profit amount that ends contract |

- **Operations:**
  - View and edit system settings
  - Reset settings to defaults
  - Import/export configuration
  - Manage system parameters
  - Track configuration changes

#### 6.4. Audit Logs
- **Purpose:** Track system activity for security and compliance
- **Data Model:**
  | Field | Type | Description |
  |-------|------|-------------|
  | AuditLogId | int | Auto-generated primary key |
  | UserId | int | Who performed the action |
  | Action | nvarchar(100) | What was done |
  | TableName | nvarchar(100) | Affected database table |
  | RecordId | int | Affected record ID |
  | OldValue | nvarchar(max) | Previous state |
  | NewValue | nvarchar(max) | New state |
  | LogDate | datetime | When action occurred |
  | IPAddress | nvarchar(50) | Source IP address |

- **Operations:**
  - View system audit trail
  - Search and filter logs
  - Export audit data
  - Generate compliance reports
  - Set up audit notifications

## Technical Requirements

### Authentication and Authorization
- JWT-based authentication
- Role-based access control
- Multi-factor authentication support
- Password policy enforcement
- Session timeout management

### Responsive UI Design
- Mobile-first responsive layout
- Support for all modern browsers
- Consistent design language
- Accessible interface (WCAG 2.1 AA compliant)
- Dark/light theme support

### Performance Considerations
- Page load time optimization
- Database query optimization
- Caching strategy
- Asynchronous processing for calculations
- Background job scheduling

### Security Implementation
- Data encryption at rest
- TLS for all communications
- Input validation and sanitization
- Protection against common vulnerabilities (XSS, CSRF, SQL injection)
- Regular security audits

### Data Management
- Backup and recovery procedures
- Data archiving strategy
- Data retention policies
- Data export capabilities
- GDPR compliance mechanisms

## Conclusion

This design specification provides a comprehensive blueprint for the Licensing System web application. The system will enable efficient management of software licensing, sales tracking, team collaboration, and profit sharing according to the company's unique business model.

By implementing this specification, we will create a robust platform that supports the company's innovative approach to expert collaboration and fair profit distribution, while providing the necessary tools for tracking, reporting, and administration.
