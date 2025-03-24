import exp from "constants";

export const pageFixtures = {
    // @ts-ignore
    page: undefined as Page
}

// Login //
export const talismanPortal = "https://tns.qa.cloud.apps.nm1.nm1.tambla.net/";
export const mercuryPortal = "https://mercury.qa.tns.apps.nm1.nm1.tambla.net/wfm"
export const usernameField = "id=username";
export const passwordField = "id=password";
export const loginButton = "id=kc-login"

// Users Tab //
export const userTab = 'a[href="/microster/users"]';
export const roleButton = 'sp-sidenav-item[label="Roles"]'
export const microsterRoleMenu = 'a[href="/microster/roles/microster"]';
export const userTable = "(//div[@class='main-container']//div)[3]";
export const userCreateButton = 'a[href="/microster/user/~create"]';
export const userIdField = 'input[aria-label="User Id"]';
export const activeCheckbox = 'input[type="checkbox"]';
export const emailAddressField = 'input[aria-label="Email Address"]';
export const userCreateSaveButton = 'sp-button:has-text("Save")';
export const contactField = 'input[aria-label="Contact Number"]';

// Microster Role //
export const hierarchyLevelColumn = 'div[data-column="microsterRole.hierarchyLevel"]';
export const createMicrosterButton = 'a[href="/microster/roles/microster/~create"]';
export const hierarchyLevelField = 'input.input[aria-label="Hierarchy Level"]';
export const duplicateButton = 'sp-action-button:has-text("Duplicate")';
export const duplicateMicrosterDialog = 'sp-alert-dialog h2:has-text("Duplicate Microster Role")';
export const deleteButton = 'sp-action-button:has-text("Delete")';
export const userManagementTab = 'sp-tab[label="User Management"]';
export const securityProfileTab = 'sp-tab[label="Security Profiles"]'
export const userId = 'div[data-column="userId"]';
export const microsterSaveButton = 'sp-button[data-miceditor-saveuser-to-role]';
export const microsterDescriptionColumn = 'div[data-column="microsterRole.description"]';

// Report Role //
export const reportDescriptionColumn = 'div[data-column="reportRole.description"]';
export const createReportButton = 'a[href="/microster/roles/report/~create"]';
export const reportManagementTab = 'sp-tab[label="Report Management "]';
export const reportDialog = 'h2:has-text("Duplicate Report Role")';

// Organisation Role //
export const organisationRoleMenu = 'a[href="/microster/roles/organisation"]';
export const organisationRoleDescription = 'div[data-column="organisationalRole.description"]';
export const createOrganisationRoleButton = 'a[href="/microster/roles/organisation/~create"]';
export const duplicateOrganistationDialog = 'sp-alert-dialog h2:has-text("Duplicate Organisation Role")';
export const organisationAccessTab = 'sp-tab[label="Organisation Access"]';
export const teamAccessTab = 'sp-tab[label="Team Access"]';


// Common //
export const gridSelector = 'div[class="b-grid-panel-body"]';
export const searchField = 'input[aria-label="Search"]';
export const nameField = 'input[aria-label="Name"]';
export const descriptionField = 'input[aria-label="Description"]';
export const nameColumn = 'div[data-column="name"]';
export const errorMessage = 'sp-help-text[slot="negative-help-text"] .validation-message';
export const userIdColumn = 'div[data-column="id"]';
export const cancelButton = '//sp-button[text()="Cancel"]';