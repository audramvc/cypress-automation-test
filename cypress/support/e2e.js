
import './commands' 

Cypress.on('uncaught:exception', (err, runnable) => {
  
  console.error('Uncaught exception:', err);

  return false;
});