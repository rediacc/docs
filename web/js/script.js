// Main JavaScript file

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up the sidebar navigation
    initSidebar();
    
    // Load the dashboard by default
    loadPage('dashboard');
});

// Initialize sidebar functionality
function initSidebar() {
    // Get all main nav items
    const navItems = document.querySelectorAll('.nav-item > a');
    
    // Add click event listeners to main nav items
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const parent = this.parentElement;
            
            // Toggle expanded state for this item
            if (parent.classList.contains('expanded')) {
                parent.classList.remove('expanded');
            } else {
                // Close all other expanded items
                document.querySelectorAll('.nav-item.expanded').forEach(el => {
                    if (el !== parent) el.classList.remove('expanded');
                });
                parent.classList.add('expanded');
            }
        });
    });
}

// Load a page into the content iframe
function loadPage(pageName) {
    const contentFrame = document.getElementById('content-frame');
    
    // Update the iframe src
    contentFrame.src = `pages/${pageName}.html`;
    
    // Update active states in the sidebar without collapsing menus
    updateSidebarActiveState(pageName);
}

// Update the active state in the sidebar
function updateSidebarActiveState(pageName) {
    // Remove all active classes
    document.querySelectorAll('.nav-item, .sub-menu li').forEach(item => {
        item.classList.remove('active');
    });
    
    // Collapse all menus first
    document.querySelectorAll('.nav-item.expanded').forEach(item => {
        item.classList.remove('expanded');
    });
    
    // First check if it's a submenu item
    const submenuItem = document.querySelector(`.sub-menu li a[onclick*="loadPage('${pageName}')"]`);
    if (submenuItem) {
        // Mark the submenu item as active
        submenuItem.parentElement.classList.add('active');
        
        // Find and mark its parent nav-item as active and expanded
        const parentNavItem = findParentNavItem(submenuItem);
        if (parentNavItem) {
            parentNavItem.classList.add('active');
            parentNavItem.classList.add('expanded');
        }
    } else {
        // It might be a main menu item
        const targetNavItem = document.querySelector(`.nav-item[data-page="${pageName}"]`);
        if (targetNavItem) {
            targetNavItem.classList.add('active');
            
            // If it has a submenu, make sure it's expanded
            if (targetNavItem.querySelector('.sub-menu')) {
                targetNavItem.classList.add('expanded');
            }
        }
    }
}

// Helper function to find parent nav-item
function findParentNavItem(element) {
    let current = element;
    while (current && !current.classList.contains('nav-item')) {
        current = current.parentElement;
    }
    return current;
}

// Function to toggle modals
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        if (modal.classList.contains('hidden')) {
            modal.classList.remove('hidden');
        } else {
            modal.classList.add('hidden');
        }
    }
}

// Functions that would be called from inside iframes
window.parentFunctions = {
    // Navigate from within an iframe
    navigate: function(pageName) {
        loadPage(pageName);
    },
    
    // Show notifications
    showNotification: function(message, type = 'info') {
        // Implementation of notifications would go here
        console.log(`Notification (${type}): ${message}`);
    }
};