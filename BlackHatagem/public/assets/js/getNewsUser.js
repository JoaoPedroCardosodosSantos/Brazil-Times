import { news } from './news.js';

class UserNoticia {
    constructor() {

        const newsMainSection = document.getElementById('news-section');
        const SlideShow = document.getElementById('mainSlideshow');

        const networkSecurityModal = document.getElementById('networkSecurityModal');
        const applicationSecurityModal = document.getElementById('applicationSecurityModal');
        const cloudSecurityModal = document.getElementById('cloudSecurityModal');
        const endpointSecurityModal = document.getElementById('endpointSecurityModal');
        const databaseSecurityModal = document.getElementById('databaseSecurityModal');
        const cryptographyModal = document.getElementById('cryptographyModal');
        const digitalForensicsModal = document.getElementById('digitalForensicsModal');
        const penetrationTestingModal = document.getElementById('penetrationTestingModal');
        const reverseEngineeringModal = document.getElementById('reverseEngineeringModal');
        const redTeamModal = document.getElementById('redTeamModal');
        const threatIntelligenceModal = document.getElementById('threatIntelligenceModal');
        const identityAccessManagementModal = document.getElementById('identityAccessManagementModal');
        const malwareAnalysisModal = document.getElementById('malwareAnalysisModal');
        const iotSecurityModal = document.getElementById('iotSecurityModal');
        const socModal = document.getElementById('socModal');
        

        if (SlideShow) {
            SlideShow.innerHTML = news.GetSlideShow();
        } 
        else {
            console.error("Elemento #mainSlideshow não encontrado!");
        }

        // if (newsMainSection) 

            networkSecurityModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getNetworkSecurityNews();
            });

            applicationSecurityModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getApplicationSecurityNews();
            });

            cloudSecurityModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getCloudSecurityNews();
            }); 

            endpointSecurityModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getEndpointSecurityNews();
            });

            databaseSecurityModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getDatabaseSecurityNews();
            });
            
            cryptographyModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getCryptographyNews();
            });

            digitalForensicsModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getDigitalForensicsNews();
            });

            penetrationTestingModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getPenetrationTestingNews();   
            });

            reverseEngineeringModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getReverseEngineeringNews();
            });
            
            redTeamModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getRedTeamNews();
            });

            threatIntelligenceModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getThreatIntelligenceNews();
            });

            identityAccessManagementModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getIdentityAccessManagementNews();
            });
            
            malwareAnalysisModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getMalwareAnalysisNews();
            });

            iotSecurityModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getIoTNews();
            });
            
            socModal.addEventListener('click', () => {
                newsMainSection.innerHTML = news.getSocNews();
            });

            // newsMainSection.innerHTML = news.getNetworkSecurityNews();
        } 
    //     else {
    //         console.error("Elemento #news-section não encontrado!");
    // }
}

document.addEventListener('DOMContentLoaded', () => {
    new UserNoticia();
});
