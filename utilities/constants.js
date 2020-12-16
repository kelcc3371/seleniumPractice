// //---------- General ----------
exports.Salesforce_URL = 'https://scedison--dmsci.my.salesforce.com/';
exports.Username = '';
exports.Password = '';
exports.EnableLogging = true;

//---------- Crew Members ----------
exports.crewToAdd = '//c-dcb_crew-board-service-resource/div/div/div[2]';
exports.crewTarget = '//c-dcb_crew-board-service-crew/c-dcb_crew-board-droppable/div/slot/div/div';
exports.crewToRemove = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[2]/slot/div/div/div/c-dcb_crew-board-work-order/div/c-dcb_crew-board-service-appointment/c-dcb_crew-board-droppable/div/slot[1]/c-dcb_crew-board-service-crew[1]/c-dcb_crew-board-droppable/div/slot[1]/div/div[2]/c-dcb_crew-board-service-resource/div/div';
exports.crewPool = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[1]/slot/c-dcb_crew-board-available-resources/c-dcb_lightning-panel/div/div/slot/c-dcb_crew-board-droppable/div';
exports.saveButton = '//button[@title="Save"]';
exports.unavailableCrewMember = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[1]/slot/c-dcb_crew-board-non-site-work/c-dcb_lightning-panel/div/div/slot/div/div/c-dcb_crew-board-droppable/div/slot[1]/div/div/div[1]/c-dcb_crew-board-non-site-work-item/div';
exports.notActivePool = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[1]/slot/c-dcb_crew-board-non-site-work/c-dcb_lightning-panel/div/div/slot/div/div/c-dcb_crew-board-droppable/div';

//---------- Non Work ----------
// exports.nonWorkPool = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[1]/slot/c-dcb_crew-board-non-site-work/c-dcb_lightning-panel/div/div/slot/c-dcb_modal/div[1]/section/div/div'
exports.nonWorkStatus = '/html/body/div[4]/div[1]/section/div[1]/div[2]/div[2]/div[1]/div/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[1]/slot/c-dcb_crew-board-non-site-work/c-dcb_lightning-panel/div/div/slot/c-dcb_modal/div[1]/section/div/div/slot[2]/div/lightning-record-edit-form/form/slot/lightning-input-field[1]/lightning-picklist/lightning-combobox/div[1]/lightning-base-combobox/div/div[1]/input';
exports.nonWorkOffice = '/html/body/div[4]/div[1]/section/div[1]/div[2]/div[2]/div[1]/div/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[1]/slot/c-dcb_crew-board-non-site-work/c-dcb_lightning-panel/div/div/slot/c-dcb_modal/div[1]/section/div/div/slot[2]/div/lightning-record-edit-form/form/slot/lightning-input-field[1]/lightning-picklist/lightning-combobox/div/lightning-base-combobox/div/div[2]/lightning-base-combobox-item[2]/span[2]/span';
exports.nonWorkStart = '/html/body/div[4]/div[1]/section/div[1]/div[2]/div[2]/div[1]/div/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[1]/slot/c-dcb_crew-board-non-site-work/c-dcb_lightning-panel/div/div/slot/c-dcb_modal/div[1]/section/div/div/slot[2]/div/lightning-record-edit-form/form/slot/lightning-input-field[2]/lightning-input/lightning-datepicker/div[1]/div/input';
exports.nonWorkEnd = '/html/body/div[4]/div[1]/section/div[1]/div[2]/div[2]/div[1]/div/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[1]/slot/c-dcb_crew-board-non-site-work/c-dcb_lightning-panel/div/div/slot/c-dcb_modal/div[1]/section/div/div/slot[2]/div/lightning-record-edit-form/form/slot/lightning-input-field[3]/lightning-input/lightning-datepicker/div[1]/div/input';
exports.nonWorkSave = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[1]/slot/c-dcb_crew-board-non-site-work/c-dcb_lightning-panel/div/div/slot/c-dcb_modal/div[1]/section/div/footer/lightning-button[2]/button';

//---------- Crew Manipulation ----------
exports.unassignedCrew = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[2]/slot/div/div/c-dcb_crewboard-unassigned-crewlist/div/c-dcb_crew-board-droppable/div/slot[1]/c-dcb_crew-board-service-crew[1]/c-dcb_crew-board-droppable/div/slot[1]/div/div[1]';
exports.workOrderTarget = '//c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[2]/slot/div/div/div/c-dcb_crew-board-work-order/div/c-dcb_crew-board-service-appointment/c-dcb_crew-board-droppable/div/slot[1]/c-dcb_crew-board-service-crew/c-dcb_crew-board-droppable/div';
exports.firstWorkOrderCrews = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[2]/slot/div/div/div[1]/c-dcb_crew-board-work-order/div/c-dcb_crew-board-service-appointment/c-dcb_crew-board-droppable/div';
exports.secondWorkOrderCrews = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[2]/slot/div/div/div[2]/c-dcb_crew-board-work-order/div/c-dcb_crew-board-service-appointment/c-dcb_crew-board-droppable/div';

exports.lastCrew = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[2]/slot/div/div/div[1]/c-dcb_crew-board-work-order/div/c-dcb_crew-board-service-appointment/c-dcb_crew-board-droppable/div/slot/*[last()]/c-dcb_crew-board-droppable/div/slot/div/div';
exports.crewMenu = '/html/body/div[4]/div[1]/section/div[1]/div[2]/div[2]/div[1]/div/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[2]/slot/div/div/div[1]/c-dcb_crew-board-work-order/div/c-dcb_crew-board-service-appointment/c-dcb_crew-board-droppable/div/slot[1]/c-dcb_crew-board-service-crew[1]/c-dcb_crew-board-droppable/div/slot[1]/div/div[1]/div[3]/lightning-button-menu';
exports.editWorkCrew = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[2]/slot/div/div/div[1]/c-dcb_crew-board-work-order/div/c-dcb_crew-board-service-appointment/c-dcb_crew-board-droppable/div/slot[1]/c-dcb_crew-board-service-crew[1]/c-dcb_crew-board-droppable/div/slot[1]/div/div[1]/div[3]/lightning-button-menu/div/div/slot/lightning-menu-item[1]';
exports.duplicateWorkCrew = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[2]/slot/div/div/div[1]/c-dcb_crew-board-work-order/div/c-dcb_crew-board-service-appointment/c-dcb_crew-board-droppable/div/slot[1]/c-dcb_crew-board-service-crew[1]/c-dcb_crew-board-droppable/div/slot[1]/div/div[1]/div[3]/lightning-button-menu/div/div/slot/lightning-menu-item[2]';
exports.deleteWorkCrew = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[2]/slot/div/div/div[1]/c-dcb_crew-board-work-order/div/c-dcb_crew-board-service-appointment/c-dcb_crew-board-droppable/div/slot[1]/c-dcb_crew-board-service-crew[1]/c-dcb_crew-board-droppable/div/slot[1]/div/div[1]/div[3]/lightning-button-menu/div/div/slot/lightning-menu-item[3]';

//---------- Crew Position Validation ----------
exports.plusButton = '//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[2]/slot/div/div/div/c-dcb_crew-board-work-order/div/c-dcb_crew-board-service-appointment/c-dcb_crew-board-droppable/div/slot[1]/div/div/lightning-button-icon/button';
exports.toastMessage =  '//div[@class="toastContainer slds-notify_container slds-is-relative"]'
exports.toastIcon = '//lightning-icon[contains(@class, "toastIcon")]'

exports.errorMessage = '//div[@data-key="error"][@class="slds-theme--error slds-notify--toast slds-notify slds-notify--toast forceToastMessage"]';
exports.successMessage = '//div[@data-key="success"][@class="slds-theme--success slds-notify--toast slds-notify slds-notify--toast forceToastMessage"]';
exports.closeToast = '//button[@title="Close"]';

exports.ecrew = '//*[@class="slds-grid slds-grid_vertical-align-center slds-border_top slds-p-around_xx-small"][@style="background-color: rgb(0, 0, 0) !important;"]';
exports.lineman = '//*[@class="slds-grid slds-grid_vertical-align-center slds-border_top slds-p-around_xx-small"][@style="background-color: rgb(193, 43, 38) !important;"]';
exports.generalForeman = '//*[@class="slds-grid slds-grid_vertical-align-center slds-border_top slds-p-around_xx-small"][@style="background-color: rgb(89, 89, 89) !important;"]'
exports.troubleman = '//*[@class="slds-grid slds-grid_vertical-align-center slds-border_top slds-p-around_xx-small"][@style="background-color: rgb(151, 184, 225) !important;"]'
exports.apprentice = '//*[@class="slds-grid slds-grid_vertical-align-center slds-border_top slds-p-around_xx-small"][@style="background-color: rgb(163, 208, 107) !important;"]'

//---------- Upload Data ----------
exports.uploadsURL = 'lightning/o/DCB_Upload__c/list?filterName=Recent';
exports.listFilter = '//*[.="Recently Viewed"]';
exports.allUploads = '//*[.="All"]';
exports.uploadFiles = '//*[@class="slds-button slds-button--neutral attachButton slds-button slds-button-neutral slds-truncate uiButton"]';
exports.santaAnaCrewMembers = '//*[@title="Test"]';
exports.santaAnaWorkOrders = '//a[@title="Test Work Orders"]';
exports.addFiles = '//div[@title="Add Files"]'
exports.processFiles = '//*[@name="DCB_Upload__c.Process"]';
exports.processingStatus = '(//*[@data-output-element-id="output-field"])[4]';
exports.santaAnaCrewMembersFile = '//span[@class="itemTitle slds-text-body--regular uiOutputText"][@title="Santa Ana Crew members (1)"]';
exports.addFileButton = '//*[.="Add (1)"]';

//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[2]/slot/div/div/div[10]/c-dcb_crewboard-unassigned-crewlist/div/div/div
//*[@id="brandBand_2"]/div/div/div/c-dcb_crew-board/div/div[2]/lightning-layout/slot/lightning-layout-item[2]/slot/div/div/div[10]/c-dcb_crewboard-unassigned-crewlist/div/c-dcb_crew-board-droppable/div/slot[1]/c-dcb_crew-board-service-crew[1]/c-dcb_crew-board-droppable