---
sidebar_position: 18
---

# UI Elements & Navigation

This guide explains all the user interface elements and navigation features available in the Rediacc Console.

## Header Navigation

The Console header provides quick access to global features and settings:

### Left Side
- **Hamburger Menu** (☰): Toggle sidebar collapse/expand
- **Company Name**: Shows current organization with plan badge (e.g., "REDIACC.IO Elite")

### Right Side
- **Language Selector**: Dropdown with flag icons for 9 supported languages
- **Theme Toggle**: Sun/moon icon to switch between light and dark themes  
- **Notification Bell**: Shows unread notification count with badge
- **User Menu**: Access profile, settings, and logout

## Sidebar Navigation

### Primary Sections
The sidebar is divided into two main groups:

#### Operations
- **Resources** (🔲): Infrastructure management
- **Marketplace** (🛒): Application templates
- **Queue** (⚡): Task management
- **Audit** (📜): Activity logs

#### System
- **Architecture** (🔀): Visual infrastructure map
- **System** (⚙️): Settings and configuration

### Sidebar Features

#### Expert Mode Toggle
Located at the bottom of the sidebar:
- **Switch Control**: Enable/disable expert mode
- **Icon**: 🛡️ (shield icon)
- **Effect**: Shows advanced options and technical details throughout the Console

When Expert Mode is enabled:
- Additional machine grouping options (Grand Repository)
- Technical IDs and internal references
- Advanced filtering capabilities
- Extended API information
- Raw vault data access
- Detailed error messages

#### User Information
- **Email Address**: Currently logged-in user
- **Company Name**: Organization context

#### Logout Button
- **Location**: Bottom of sidebar
- **Icon**: 🚪 (logout icon)
- **Action**: Ends current session

## Common UI Patterns

### Action Buttons

#### Primary Actions
- **Blue buttons**: Main actions (Create, Save, Deploy)
- **Green buttons**: Positive actions (Connect, Enable)
- **Red buttons**: Destructive actions (Delete, Disconnect)
- **Gray buttons**: Secondary actions (Cancel, Close)

#### Icon Buttons
Common button icons and their meanings:
- ➕ **Plus**: Add/Create new item
- ✏️ **Edit**: Modify existing item
- 🗑️ **Delete**: Remove item
- 🔄 **Refresh**: Update data
- 📤 **Export**: Download data
- 👁️ **View**: Preview or inspect
- 🚀 **Deploy**: Launch or execute
- 📋 **Copy**: Copy to clipboard
- 🔍 **Search**: Find items
- ⚙️ **Settings**: Configure options

### Tables and Lists

#### Sorting
- Click column headers to sort
- Arrow indicators show sort direction
- Multi-column sorting with Shift+Click

#### Filtering
- Search boxes for text filtering
- Dropdown selects for category filtering
- Date pickers for time-based filtering
- Checkbox groups for multi-select

#### Pagination
- Page size selector (10, 25, 50, 100 items)
- Previous/Next navigation buttons
- Current page indicator
- Total records count

### Form Elements

#### Input Fields
- **Text inputs**: Standard text entry
- **Password fields**: Hidden text with show/hide toggle
- **Dropdowns**: Select from predefined options
- **Multi-select**: Choose multiple options
- **Date pickers**: Calendar selection
- **Toggle switches**: Boolean on/off options
- **Radio buttons**: Single choice selection
- **Checkboxes**: Multiple choice selection

#### Validation
- **Red border**: Invalid input
- **Green border**: Valid input
- **Helper text**: Instructions below fields
- **Error messages**: Red text for validation errors
- **Required indicator**: Red asterisk (*)

### Modals and Dialogs

#### Modal Types
- **Form modals**: For creating/editing items
- **Confirmation dialogs**: For destructive actions
- **Information modals**: For detailed views
- **Wizard modals**: Multi-step processes

#### Modal Controls
- **X button**: Close without saving
- **Cancel**: Close and discard changes
- **Save**: Apply changes and close
- **Save & Continue**: Apply without closing

## Navigation Patterns

### Breadcrumbs
Shown in resource views:
```
Resources > Machines > rediacc12
```

### Tab Navigation
Used for related content sections:
- Active tab highlighted
- Keyboard navigation with arrow keys
- Badge counts on tabs (e.g., "Users (3)")

### Contextual Navigation
- **Quick links**: Related actions in widget headers
- **Inline actions**: Buttons within table rows
- **Dropdown menus**: Additional options via "..." menu

## Keyboard Shortcuts

### Global Shortcuts
- **Alt + R**: Go to Resources
- **Alt + M**: Go to Marketplace  
- **Alt + Q**: Go to Queue
- **Alt + A**: Go to Audit
- **Alt + S**: Go to System
- **Ctrl + K**: Open command palette (if available)
- **Esc**: Close modal/dropdown

### List Navigation
- **↑/↓**: Navigate items
- **Enter**: Select item
- **Space**: Toggle selection
- **Ctrl + A**: Select all
- **Ctrl + Click**: Multi-select

## Visual Indicators

### Status Icons
- ✅ **Check Circle**: Success/Active
- ❌ **X Circle**: Error/Failed
- ⚠️ **Warning Triangle**: Caution/Warning
- ℹ️ **Info Circle**: Information
- 🕐 **Clock**: Pending/Waiting
- 🔄 **Sync**: Processing/In Progress
- 🔒 **Lock**: Restricted/Secured
- 🔓 **Unlock**: Accessible/Open

### Color Coding
- **Green**: Success, healthy, completed
- **Blue**: Information, active, processing
- **Yellow/Orange**: Warning, attention needed
- **Red**: Error, critical, failed
- **Gray**: Disabled, inactive, neutral

### Badges and Labels
- **Superscript numbers**: Counts (e.g., Queue¹)
- **Colored tags**: Categories and statuses
- **Pill badges**: Inline status indicators
- **Progress bars**: Percentage completion

## Responsive Behavior

### Desktop View (>1200px)
- Full sidebar visible
- Multi-column layouts
- Expanded table views
- Side-by-side comparisons

### Tablet View (768-1200px)
- Collapsible sidebar
- Stacked layouts
- Simplified tables
- Touch-optimized controls

### Mobile View (Less than 768px)
- Hamburger menu navigation
- Single column layouts
- Card-based views
- Swipe gestures

## Accessibility Features

### Keyboard Navigation
- All interactive elements accessible via Tab
- Focus indicators on active elements
- Skip links for main content
- Logical tab order

### Screen Reader Support
- ARIA labels on icons
- Descriptive button text
- Form field labels
- Status announcements

### Visual Accessibility
- High contrast mode support
- Scalable fonts
- Color-blind friendly palettes
- Focus visible indicators

## Best Practices

### Efficient Navigation
1. Use keyboard shortcuts for common actions
2. Enable Expert Mode for advanced features
3. Customize dashboard for quick access
4. Use search instead of browsing
5. Bookmark frequently used pages

### UI Optimization
1. Collapse sidebar for more space
2. Use filters to reduce data
3. Sort tables by relevant columns
4. Export large datasets for analysis
5. Use pagination appropriately

### Troubleshooting UI Issues
1. **Elements not responding**: Refresh the page
2. **Layout broken**: Clear browser cache
3. **Missing features**: Check Expert Mode
4. **Slow performance**: Reduce page size
5. **Theme issues**: Toggle theme or check browser settings

## Summary

Understanding the Console's UI elements and navigation patterns helps you work more efficiently. Take advantage of keyboard shortcuts, Expert Mode, and visual indicators to streamline your workflow. The consistent design patterns across the Console make it easy to learn new features as they're added.