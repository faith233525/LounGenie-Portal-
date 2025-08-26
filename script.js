// LounGenie Portal JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('LounGenie Portal loaded successfully!');
    
    // Initialize portal functionality
    initializePortal();
});

function initializePortal() {
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add click handlers for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            handleButtonClick(this.textContent.trim());
        });
    });

    // Display welcome message
    showWelcomeMessage();
}

function handleButtonClick(buttonText) {
    // Simple alert for demonstration - in a real app this would connect to backend
    switch(buttonText) {
        case 'Create New Ticket':
            alert('Opening ticket creation form...');
            break;
        case 'View All Tickets':
            alert('Loading support tickets...');
            break;
        case 'Knowledge Base':
            alert('Opening knowledge base...');
            break;
        case 'Add New Partner':
            alert('Opening partner registration form...');
            break;
        case 'View Partner List':
            alert('Loading partner directory...');
            break;
        case 'Partner Reports':
            alert('Generating partner reports...');
            break;
        case 'Account Settings':
            alert('Opening account settings...');
            break;
        case 'Portal Configuration':
            alert('Opening portal configuration...');
            break;
        case 'User Management':
            alert('Opening user management panel...');
            break;
        default:
            alert(`${buttonText} functionality coming soon!`);
    }
}

function showWelcomeMessage() {
    // Add a subtle animation to the welcome section
    const welcomeSection = document.querySelector('.welcome');
    if (welcomeSection) {
        welcomeSection.style.opacity = '0';
        welcomeSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            welcomeSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            welcomeSection.style.opacity = '1';
            welcomeSection.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Utility function to update dashboard stats (for future use)
function updateDashboardStats(stats) {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (stats && statNumbers.length >= 3) {
        statNumbers[0].textContent = stats.tickets || '12';
        statNumbers[1].textContent = stats.partners || '8';
        statNumbers[2].textContent = stats.pending || '3';
    }
}

// Function to check portal status
function checkPortalStatus() {
    console.log('✅ LounGenie Portal is running successfully!');
    console.log('📊 Dashboard: Active');
    console.log('🎫 Support System: Ready');
    console.log('🤝 Partner Management: Available');
    console.log('⚙️ Settings: Accessible');
    
    return {
        status: 'active',
        timestamp: new Date().toISOString(),
        modules: {
            dashboard: true,
            support: true,
            partners: true,
            settings: true
        }
    };
}