---
sidebar_position: 17
---

# Internationalization (i18n)

The Rediacc Console provides comprehensive internationalization support, allowing users worldwide to access the interface in their preferred language.

## Supported Languages

The Console currently supports 9 languages:

| Language | Code | Native Name | Coverage |
|----------|------|-------------|----------|
| English | en | English | 100% |
| Spanish | es | Español | 100% |
| French | fr | Français | 100% |
| German | de | Deutsch | 100% |
| Italian | it | Italiano | 100% |
| Portuguese | pt | Português | 100% |
| Russian | ru | Русский | 100% |
| Chinese (Simplified) | zh | 中文 | 100% |
| Japanese | ja | 日本語 | 100% |

## Language Selection

### From Login Screen

Users can select their preferred language before logging in:

1. Click the language selector at the bottom of the login form
2. Choose from the dropdown list showing flag icons and language names
3. The interface immediately updates to the selected language

### From Within the Application

Once logged in, users can change the language:

1. Click the language selector in the top navigation bar
2. Select the desired language from the dropdown
3. The entire interface updates without requiring a page reload

## Features

### Complete UI Translation

All interface elements are translated:
- Navigation menus
- Form labels and placeholders
- Button text
- Error messages
- Success notifications
- Help tooltips
- Table headers
- Dialog titles

### Dynamic Content

The system handles dynamic content appropriately:
- User-generated content remains in original language
- System messages are translated
- Mixed content displays correctly

### Regional Formatting

Each language includes appropriate regional formatting:

#### Number Formatting
```javascript
// English: 1,234,567.89
// German: 1.234.567,89
// French: 1 234 567,89
```

#### Date Formatting
```javascript
// English: 01/15/2025
// German: 15.01.2025
// French: 15/01/2025
// Japanese: 2025年01月15日
```

#### Currency Display
```javascript
// English: $1,234.56
// German: 1.234,56 €
// Japanese: ¥1,234
```

## Implementation

### Technology Stack

The Console uses **i18next** for internationalization:

```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      // ... other languages
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
```

### Translation Files

Translations are organized by language:

```
src/locales/
├── en/
│   ├── common.json
│   ├── dashboard.json
│   ├── resources.json
│   └── ...
├── es/
│   ├── common.json
│   ├── dashboard.json
│   └── ...
└── ...
```

### Using Translations

#### In Components
```typescript
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('dashboard.title')}</h1>
      <p>{t('dashboard.welcome', { name: userName })}</p>
    </div>
  );
}
```

#### With Placeholders
```json
{
  "welcome": "Welcome, {{name}}!",
  "itemCount": "You have {{count}} item",
  "itemCount_plural": "You have {{count}} items"
}
```

## Language Features

### Pluralization

The system handles pluralization rules for each language:

```typescript
// English
t('items', { count: 0 }); // "0 items"
t('items', { count: 1 }); // "1 item"
t('items', { count: 5 }); // "5 items"

// Russian (different rules)
t('items', { count: 1 }); // "1 элемент"
t('items', { count: 2 }); // "2 элемента"
t('items', { count: 5 }); // "5 элементов"
```

### Context-Sensitive Translations

Different translations based on context:

```json
{
  "save": "Save",
  "save_document": "Save Document",
  "save_and_continue": "Save & Continue",
  "save_as_draft": "Save as Draft"
}
```

### Gender and Formality

Support for languages requiring gender or formality:

```json
{
  "greeting_formal": "Guten Tag, Herr {{lastName}}",
  "greeting_informal": "Hallo {{firstName}}"
}
```

## Best Practices

### For Developers

1. **Always Use Translation Keys**
   ```typescript
   // ❌ Bad
   <button>Submit</button>
   
   // ✅ Good
   <button>{t('common.submit')}</button>
   ```

2. **Provide Context**
   ```typescript
   // Help translators with comments
   t('dashboard.sync', { context: 'verb' }); // Synchronize
   t('dashboard.sync', { context: 'noun' }); // Synchronization
   ```

3. **Avoid String Concatenation**
   ```typescript
   // ❌ Bad
   t('hello') + ' ' + userName
   
   // ✅ Good
   t('hello_user', { name: userName })
   ```

### For Translators

1. **Maintain Consistency**
   - Use glossary for technical terms
   - Keep UI terminology consistent
   - Follow platform conventions

2. **Consider Space Constraints**
   - Some languages require more space
   - Test translations in actual UI
   - Use abbreviations carefully

3. **Preserve Placeholders**
   ```json
   // Original
   "message": "Processing {{count}} items..."
   
   // Translation must keep {{count}}
   "message": "Procesando {{count}} elementos..."
   ```

## Adding New Languages

To add a new language:

1. **Create Translation Files**
   ```bash
   mkdir src/locales/ko  # Korean example
   cp -r src/locales/en/* src/locales/ko/
   ```

2. **Add Language Configuration**
   ```typescript
   const languages = {
     en: { name: 'English', flag: '🇬🇧' },
     ko: { name: '한국어', flag: '🇰🇷' }, // New
     // ...
   };
   ```

3. **Import Translations**
   ```typescript
   import koTranslations from './locales/ko';
   
   i18n.addResourceBundle('ko', 'translation', koTranslations);
   ```

4. **Test Thoroughly**
   - Check all UI elements
   - Verify number/date formatting
   - Test with long translations
   - Validate special characters

## Troubleshooting

### Missing Translations

When a translation is missing:
1. System falls back to English
2. Console warning in development
3. Key is displayed in production

### Language Not Changing

Common causes:
- Browser cache - clear and reload
- Local storage corruption - clear site data
- Missing translation files - check console errors

### Formatting Issues

For number/date formatting problems:
- Verify locale data is loaded
- Check regional settings
- Update i18next plugins

## Advanced Features

### Lazy Loading

Large translation files can be loaded on demand:

```typescript
i18n.on('languageChanged', (lng) => {
  import(`./locales/${lng}/large-module.json`)
    .then(translations => {
      i18n.addResourceBundle(lng, 'large-module', translations);
    });
});
```

### Language Detection

Automatic language detection based on:
1. User preference (if logged in)
2. Browser language setting
3. System locale
4. Default fallback (English)

### Translation Memory

The system remembers:
- Last selected language
- Per-user language preference
- Team default language
- Organization default language

## API Integration

### Backend Localization

API responses include localized content:

```typescript
// Request header
headers: {
  'Accept-Language': 'es-ES'
}

// Response includes Spanish content
{
  "message": "Operación completada exitosamente",
  "errors": []
}
```

### Error Messages

Server errors are translated:
```json
{
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Credenciales inválidas", // Localized
    "field": "password"
  }
}
```

## Performance

### Optimization Techniques

1. **Translation Caching**
   - Translations cached in memory
   - LocalStorage for persistence
   - Service Worker caching

2. **Bundle Splitting**
   - Core translations in main bundle
   - Feature translations lazy loaded
   - Language-specific bundles

3. **Rendering Performance**
   - Minimal re-renders on language change
   - Memoized translation functions
   - Efficient key lookup

## Future Enhancements

### Planned Features
- Right-to-left (RTL) language support
- More languages (Korean, Hindi, Arabic)
- Translation management UI
- Community translation portal
- Machine translation integration
- Voice interface localization