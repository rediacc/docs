# Offers to Docs Migration Plan

## Overview
This document outlines the comprehensive plan for migrating content from the `/offers` project to the `/docs` project while removing registration functionality.

## Migration Scope

### What to Migrate
1. **Marketing Content**
   - Hero section content
   - Features descriptions
   - Team/Founders information
   - Partnership programs
   - Company story

2. **Pricing Information**
   - Pricing tiers and plans
   - Comparison tables
   - Service descriptions

3. **Legal Pages**
   - Privacy Policy
   - Terms of Service

4. **Assets**
   - Company logos
   - Team member profiles
   - Background images
   - Icons and illustrations

5. **Internationalization**
   - All translation files (9 languages)
   - Language-specific content

### What to Exclude
1. **Registration System**
   - RegistrationPopup component
   - RegistrationContext
   - Registration API calls
   - Email activation flow
   - Password hashing logic

2. **Registration UI Elements**
   - Register button in header
   - Registration triggers
   - Activation URL handling

## Technical Migration Strategy

### Phase 1: Content Analysis and Preparation

1. **Extract Marketing Content**
   - Identify all static content from React components
   - Convert JSX content to Markdown format
   - Preserve multi-language support

2. **Asset Migration**
   - Copy all relevant images to `/docs/static/img/`
   - Update image references in content
   - Optimize images for documentation site

3. **Translation Files**
   - Convert JSON translations to Docusaurus i18n format
   - Map translation keys to new documentation structure

### Phase 2: Documentation Structure

Create new sections in `/docs/docs/`:

```
docs/
├── product/
│   ├── _category_.json
│   ├── overview.md (from HeroSection)
│   ├── features.md (from FeaturesSection)
│   ├── pricing/
│   │   ├── _category_.json
│   │   ├── plans.md
│   │   ├── comparison.md
│   │   └── enterprise.md
│   └── partnerships.md
├── company/
│   ├── _category_.json
│   ├── about.md
│   ├── team.md
│   └── founders.md
└── legal/
    ├── _category_.json
    ├── privacy.md
    └── terms.md
```

### Phase 3: Component-to-Documentation Mapping

| Offers Component | Docs Destination | Content Type |
|-----------------|------------------|--------------|
| HeroSection.jsx | product/overview.md | Landing page content |
| FeaturesSection.jsx | product/features.md | Feature descriptions |
| PricingSection.jsx | product/pricing/plans.md | Pricing tiers |
| PricingComparisonTable.jsx | product/pricing/comparison.md | Feature comparison |
| AboutPage.jsx | company/about.md | Company story |
| TeamSection.jsx | company/team.md | Team members |
| FoundersSection.jsx | company/founders.md | Founder bios |
| PartnershipsPage.jsx | product/partnerships.md | Partner programs |
| PrivacyPage.jsx | legal/privacy.md | Privacy policy |
| TermsPage.jsx | legal/terms.md | Terms of service |

### Phase 4: Homepage Integration

Update `/docs/src/pages/index.js` to include:
- Marketing hero content
- Feature highlights
- Call-to-action sections (without registration)
- Links to pricing and company information

### Phase 5: Navigation Updates

1. **Update `docusaurus.config.js`**
   - Add new navbar items for Product, Company, Legal
   - Remove any registration-related links
   - Update footer with new structure

2. **Update `sidebars.js`**
   - Add new documentation categories
   - Organize content hierarchically

### Phase 6: Functionality Replacements

| Removed Functionality | Replacement |
|---------------------|-------------|
| Register button | "Contact Sales" or "Get Started" linking to console |
| Registration popup | Direct users to existing console login |
| Email activation | Not needed |
| Company creation API | Document API in REST API section |

## Implementation Steps

### Step 1: Create Migration Branch
```bash
git checkout -b migrate-offers-to-docs
```

### Step 2: Content Extraction (Manual Process)
1. Read each React component
2. Extract text content and structure
3. Convert to Markdown format
4. Preserve formatting and styling intent

### Step 3: Asset Migration
```bash
# Copy images
cp -r offers/react-app/public/images/* docs/static/img/
cp -r offers/react-app/public/profiles/* docs/static/img/profiles/

# Copy logos
cp offers/react-app/src/assets/* docs/static/img/
```

### Step 4: Translation Migration
1. Create i18n directories in docs
2. Convert translation JSON to Docusaurus format
3. Update translation keys

### Step 5: Create New Documentation Pages
- Write Markdown files for each section
- Add proper frontmatter
- Include images with correct paths
- Add navigation metadata

### Step 6: Update Docusaurus Configuration
- Modify navbar configuration
- Update footer links
- Add new sidebar categories
- Configure i18n settings

### Step 7: Testing
1. Build documentation site
2. Verify all content displays correctly
3. Test navigation
4. Validate multi-language support
5. Check responsive design

### Step 8: Cleanup
1. Remove `/offers` directory
2. Update any references in other projects
3. Update deployment configurations

## Special Considerations

### 1. Pricing Updates
- Pricing information should be maintained in a single location
- Consider using data files for pricing that can be imported

### 2. Contact Information
- Replace registration CTAs with:
  - "Contact Sales" for enterprise
  - "View Documentation" for technical users
  - "Sign In" linking to console

### 3. SEO Preservation
- Maintain URL structure where possible
- Set up redirects from old offers URLs to new docs URLs
- Preserve meta descriptions and titles

### 4. Interactive Elements
- Terminal emulation → Code examples in docs
- Pricing toggle → Static comparison tables
- Testimonial slider → Static testimonials section

## Post-Migration Checklist

- [ ] All content migrated and accessible
- [ ] Images displaying correctly
- [ ] Multi-language support working
- [ ] Navigation updated
- [ ] No broken links
- [ ] Registration functionality completely removed
- [ ] Console login links working
- [ ] Build passing
- [ ] Deployment updated
- [ ] Old offers directory removed
- [ ] Redirects configured
- [ ] Team notified of changes

## Timeline Estimate

- Phase 1-2: 2-3 days (content extraction and preparation)
- Phase 3-4: 3-4 days (documentation creation)
- Phase 5-6: 1-2 days (configuration updates)
- Testing & cleanup: 1-2 days

**Total: 7-11 days**

## Risk Mitigation

1. **Content Loss**: Keep offers project archived until migration is verified
2. **SEO Impact**: Implement proper redirects and maintain URL structure
3. **User Confusion**: Clear communication about where to find information
4. **Translation Errors**: Thorough testing of all language versions

## Success Criteria

1. All marketing content accessible in documentation
2. No registration functionality remaining
3. Improved user experience with unified documentation
4. Maintained multi-language support
5. Simplified maintenance with single documentation source