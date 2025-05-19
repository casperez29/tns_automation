import { When, Then, setDefaultTimeout, Given } from "@cucumber/cucumber";

setDefaultTimeout(60 * 5000 * 1);

import { expect } from "@playwright/test";
// import { pageFixtures } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";

When('User clicks on Leave dropdown tab', async function () {
    // Wait for the "Shift management" link to be visible after clicking the menu
    await locators.pageFixtures.page.getByText('Leavekeyboard_arrow_right')

    // Click the "Shift management" link
    await locators.pageFixtures.page.getByText('Leavekeyboard_arrow_right').click();

    console.log(' Leave Menu dropdown clicked. ');
})

Given('User clicks on Leave tab', async function () {
    await locators.pageFixtures.page.click('a[href="/wfm/leave"]');
    console.log('✅ Leave tab is clicked');
})

Given('User is redirected to the Leave dashboard', async function () {
    await expect(locators.pageFixtures.page.locator('mat-toolbar span:has-text("Leave")')).toBeVisible();
})

Given('User clicks on the create leave button', async function () {
    // await locators.pageFixtures.page.locator('mat-card:has(mat-card-title:text("Leave")) a:has-text("Create")').click();
    // Click the "CREATE" button using its text
    await locators.pageFixtures.page.locator('a:has-text("CREATE")').click();

})

Given('User validates Approver field is auto populated with approver {string}', async function (approver) {
    // Locate the mat-select element that displays the selected value
    const selectedValueLocator = locators.pageFixtures.page.locator('mat-select#mat-select-4 .mat-select-value-text');

    // Validate that the selected value contains approver
    await expect(selectedValueLocator).toContainText(approver);
});

Given('User clicks on Add leave day button', async function () {
    await locators.pageFixtures.page.getByRole('button', { name: 'Add leave day' }).click();
})

Given('User selects leave {string} on the leave type field', async function (leave) {
    // Click on the mat-select by its label
    await locators.pageFixtures.page.getByLabel('Leave Type').click();

    // Wait for options to appear and select 'ALEAVE'
    await locators.pageFixtures.page.getByRole('option', { name: leave, exact: true }).click();
})

Given('User clicks on Add leave button', async function () {
    // Click the "Add" button using its text and class for more specificity
    await locators.pageFixtures.page.locator('button.mat-raised-button:has-text("Add")').click();

})

Given('User selects Start Date and End Date {string} {string}', async function (startDate, endDate) {
    // Step 1: Get tomorrow's date dynamically
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Step 2: Format the date (extract day and month)
    const dayOfMonth = tomorrow.getDate();
    const month = tomorrow.toLocaleString('default', { month: 'short' }).toLowerCase(); // 'apr' for April
    const year = tomorrow.getFullYear();

    // Step 3: Ensure the datepicker toggle is available and clickable
    await locators.pageFixtures.page.locator('div[formcontrolname="endDate"] .mat-datepicker-toggle button').waitFor({ state: 'attached' });

    // Step 4: Open the datepicker for the 'endDate' field
    await locators.pageFixtures.page.locator('div[formcontrolname="endDate"] .mat-datepicker-toggle button').click();

    // Step 5: Wait for the calendar to be visible
    await locators.pageFixtures.page.locator('.mat-calendar-content').waitFor({ state: 'visible' });

    // Step 6: Select tomorrow's date dynamically
    await locators.pageFixtures.page.locator(`td[aria-label="${month} ${year}"] >> text=${dayOfMonth}`).click();

})

When('User clicks on Submit Leave Request button', async function () {
    await locators.pageFixtures.page.locator('button.mat-raised-button:has-text("Submit")').click();
})

Given('User clicks on Add attachment button', async function () {
    // Click the button using its text "Add attachments"
    await locators.pageFixtures.page.locator('button:has-text("Add attachments")').click();

})

Given('User uploads a file', async function () {
    const fileInput = locators.pageFixtures.page.locator('input[type="file"]');
    await fileInput.setInputFiles('C:/Users/Casius Perez/talisman/test-results/cucumber-report.html');
})

Given('User validates attachment is successfully added on the Leave Request', async function () {
    // Check if the row with the specific file name is visible
    const fileNameLocator = locators.pageFixtures.page.locator('mat-row:has(a:has-text("cucumber-report.html"))');
    const msg = ' Successfully added attachment to the Leave Request'
    await expect(fileNameLocator).toBeVisible()
    console.log(msg);
})

Given('User clicks on Upload button', async function () {
    // Click the button using its text "Upload"
    await locators.pageFixtures.page.locator('button:has-text("Upload")').click();

})

Given('User clicks on Approve button', async function () {
    await locators.pageFixtures.page.click('button:has-text("Approve")');
})

Given('User clicks on Recommend {string} button', async function (recommend) {
    if (recommend == 'Approve') {
        await locators.pageFixtures.page.click('button:has-text("Recommend Approve")');
    } else {
        await locators.pageFixtures.page.click('button:has-text("Recommend Deny")');   
    }
})

Given('User clicks on Deny button', async function () {
    await locators.pageFixtures.page.click('button:has-text("Deny")');
})

Then('User validates Approve and Deny buttons are not visible', async function () {
    // Assert the "check" button is not visible
    await expect(locators.pageFixtures.page.locator('mat-icon:has-text("check")')).toBeHidden();

    // Assert the "clear" button is not visible
    await expect(locators.pageFixtures.page.locator('mat-icon:has-text("clear")')).toBeHidden();

})

Given('User search a personnel {string}', async function (personnel) {
    await locators.pageFixtures.page.waitForTimeout(5000)
    await locators.pageFixtures.page.getByLabel('Search').click();
    await locators.pageFixtures.page.getByLabel('Search').fill(personnel);

})

Given('User selects the personnel {string}', async function (personnel) {
    const targetRow = locators.pageFixtures.page.locator('mat-row', { hasText: personnel });
    await expect(targetRow).toBeVisible({ timeout: 5000 });

    // Click the entire row
    await targetRow.click();

});

Given('User selects the personnel {string} with Pending status', async function (personnel) {
    const pendingStatus = 'Pending';

    // Locate the row that contains both personnel and status 'Pending'
    const targetRow = locators.pageFixtures.page.locator('mat-row', { hasText: personnel, }).locator('mat-cell.cdk-column-status', { hasText: pendingStatus });

    await expect(targetRow).toBeVisible({ timeout: 5000 });

    // Click the entire row
    await targetRow.click();
    // const statusCells = locators.pageFixtures.page.locator('mat-cell.cdk-column-status');
    // const targetRow = locators.pageFixtures.page.locator('mat-row', { hasText: personnel });
    // await expect(targetRow).toBeVisible({ timeout: 5000 });

    // // Click the entire row
    // await targetRow.click();

});

Given('User selects the personnel {string} with Approved L1 status', async function (personnel) {
    const approveL1 = 'Approved - L1';

    // Locate the row that contains both personnel and status 'Pending'
    const targetRow = locators.pageFixtures.page.locator('mat-row', { hasText: personnel, }).locator('mat-cell.cdk-column-status', { hasText: approveL1 });

    await expect(targetRow).toBeVisible({ timeout: 5000 });

    // Click the entire row
    await targetRow.click();

});

Given('User selects the personnel {string} with Pending status and {string} hours', async function (personnel, hours) {
    const pendingStatus = 'Pending';

    const allRows = locators.pageFixtures.page.locator('mat-row');
    const targetRow = allRows.filter({
        has: locators.pageFixtures.page.locator('mat-cell.cdk-column-personnel', { hasText: personnel })
    }).filter({
        has: locators.pageFixtures.page.locator('mat-cell.cdk-column-status', { hasText: pendingStatus })
    }).filter({
        has: locators.pageFixtures.page.locator('mat-cell.cdk-column-hours', { hasText: hours })
    });

    await expect(targetRow).toBeVisible({ timeout: 5000 });
    await targetRow.click();


})

Given('User is redirected to Leave Request for personnel {string}', async function (personnel) {
    const requestCard = locators.pageFixtures.page.locator('mat-card-title', { hasText: personnel });
    await expect(requestCard).toBeVisible();

    const msg = `✅ Verified personnel card is visible for: ${personnel}`
    // Optional: log it to console (can be pulled into report later)
    console.log(msg);
    await this.attach(msg)
})

Then('User validates personnel {string} leave request status is {string}', async function (personnel, status) {
    const rows = locators.pageFixtures.page.locator('mat-row');
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        await expect(row).toBeVisible({ timeout: 5000 });

        const personnelCell = row.locator('mat-cell.cdk-column-personnel'); // adjust this if needed
        const statusCell = row.locator('mat-cell.cdk-column-status');

        const personnelText = (await personnelCell.textContent())?.trim();
        const statusText = (await statusCell.textContent())?.trim();

        console.log(`Checking row ${i}: Personnel="${personnelText}", Status="${statusText}"`);

        // Use includes instead of strict === for personnel
        const personnelMatches = personnelText?.includes(personnel);
        const statusMatches = statusText === status;

        if (personnelMatches && statusMatches) {
            console.log(`Found matching row: Personnel="${personnelText}", Status="${statusText}"`);
            await row.click(); // click the whole row
            return; // done after click
        }
    }

    throw new Error(`No matching row found for Personnel containing "${personnel}" with Status "${status}".`);



    // // Locate Personnel with expected status
    // const targetRow = locators.pageFixtures.page.locator('mat-row', { hasText: personnel, }).locator('mat-cell.cdk-column-status', { hasText: status });
    // // const targetRow = locators.pageFixtures.page.locator('mat-row', { hasText: personnel, }).getByRole('gridcell', { name: status, exact: true })
    // // Locate the mat-row that contains the personnel
    // // const targetRow = locators.pageFixtures.page.locator('mat-row', { hasText: personnel });
    // await expect(targetRow).toBeVisible({ timeout: 5000 });

    // // Inside that row, find the status cell
    // const statusCell = targetRow.locator('mat-cell.cdk-column-status');
    // await expect(statusCell).toBeVisible({ timeout: 5000 });

    // // Get the status text
    // const statusText = (await statusCell.textContent())?.trim();

    // // Assert status
    // expect(statusText).toBe(status);
})

Given('User inputs on the comment box {string}', async function (comment) {
    const commentBox = locators.pageFixtures.page.locator('textarea[data-placeholder="Add a comment"]');
    await commentBox.waitFor({ state: 'visible' });
    await commentBox.click();
    await commentBox.fill('Test Purposes');
    // await locators.pageFixtures.page.locator('textarea[placeholder="Add a comment"]').click();
    // await locators.pageFixtures.page.locator('textarea[placeholder="Add a comment"]').fill(comment);
})

Given('User clicks on the submit comment button', async function () {
    await locators.pageFixtures.page.locator('button:has(mat-icon:text("comment"))').click();
})

Then('User validates comment {string} from user {string} is added successfully', async function (user, comment) {
    const page = locators.pageFixtures.page;

    const commentListItem = page.locator('.mat-list-item', {
        hasText: user,
    }).filter({
        hasText: comment,
    }).first();

    await expect(commentListItem).toBeVisible();
    const msg = `Successfully submitted and verified comment ${comment} from ${user}`
    console.log(msg)
    await this.attach(msg)
})

Then('User validates Leave Balance and Status is visible', async function () {
    const validStatuses = ['Pending', 'Approved', 'Recommend - Approved', 'Recommend - Denied', 'Denied', 'Approved - L1']; // List of valid statuses

    // Locator for the status column cells
    const statusCells = locators.pageFixtures.page.locator('mat-cell.cdk-column-status');

    // Get the count of rows in the status column
    const count = await statusCells.count();

    // Create a Set to store unique found statuses
    const foundStatuses = new Set<string>();

    // Loop through all rows and assert that each status is one of the valid statuses
    for (let i = 0; i < count; i++) {
        const statusCell = statusCells.nth(i);
        await expect(statusCell).toBeVisible(); // Assert that the status cell is visible
        const statusText = await statusCell.textContent(); // Get the text content of the status cell

        const trimmedStatusText = statusText?.trim(); // Remove any leading/trailing spaces

        foundStatuses.add(trimmedStatusText); // Add the status to the Set (duplicates will be ignored)
    }
    // Log only the unique statuses found
    console.log("Found unique statuses:", Array.from(foundStatuses));
    // console.log(`Found status: ${trimmedStatusText}`); // Log the found status

    // expect(validStatuses).toContain(statusText?.trim()); // Assert that the status is one of the valid statuses
    foundStatuses.forEach(status => {
        expect(validStatuses).toContain(status); // Ensure each found status is one of the valid statuses
    });
    const balanceCells = locators.pageFixtures.page.locator('mat-cell.cdk-column-balances');
    const countBal = await balanceCells.count();
    const balanceValues = new Set<string>();

    for (let i = 0; i < countBal; i++) {
        const cell = balanceCells.nth(i);
        await expect(cell).toBeVisible();
        const text = await cell.textContent();
        balanceValues.add(text?.trim() || '');
    }

    console.log('Found unique balances:', Array.from(balanceValues));

})

Then('User validates only Approved Leave Balance and Status is visible', async function () {
    const expectedStatus = 'Approved';

    const statusCells = locators.pageFixtures.page.locator('mat-cell.cdk-column-status');
    const count = await statusCells.count();

    for (let i = 0; i < count; i++) {
        const statusCell = statusCells.nth(i);
        await expect(statusCell).toBeVisible();
        const statusText = (await statusCell.textContent())?.trim();

        console.log(`Checking status: ${statusText}`);
        if (statusText !== expectedStatus) {
            throw new Error(`Found unexpected status: "${statusText}". Expected only "${expectedStatus}".`);
        }
    }

    const balanceCells = locators.pageFixtures.page.locator('mat-cell.cdk-column-balances');
    const countBal = await balanceCells.count();
    const balanceValues = new Set<string>();

    for (let i = 0; i < countBal; i++) {
        const cell = balanceCells.nth(i);
        await expect(cell).toBeVisible();
        const text = (await cell.textContent())?.trim() || '';
        balanceValues.add(text);
    }

    console.log('Found unique balances:', Array.from(balanceValues));

});

Then('User validates only Leave Requests are visible from the following personnel:', async function (dataTable) {
    const allowedPersonnel: string[] = dataTable.raw().flat().map((name: string) => name.trim());

    const personnelCells = locators.pageFixtures.page.locator('mat-cell.cdk-column-personnel');
    const count = await personnelCells.count();

    for (let i = 0; i < count; i++) {
        const personnelCell = personnelCells.nth(i);
        await expect(personnelCell).toBeVisible();
        const personnelText = (await personnelCell.textContent())?.trim() || '';

        console.log(`Checking personnel: ${personnelText}`);

        const match = allowedPersonnel.some((allowed: string) => personnelText.startsWith(allowed));

        if (!match) {
            throw new Error(`Unexpected personnel found: "${personnelText}". Allowed personnel: ${allowedPersonnel.join(', ')}`);
        }
    }
});
