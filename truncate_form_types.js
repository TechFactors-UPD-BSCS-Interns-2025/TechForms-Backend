// truncate_form_types.js
const { sequelize } = require('./app/models'); // adjust path as needed

async function truncateFormTypes() {
  try {
    await sequelize.query('TRUNCATE TABLE form_types'); // For MySQL
    // await sequelize.query('TRUNCATE form_types RESTART IDENTITY CASCADE'); // PostgreSQL
    console.log('✅ form_types table truncated successfully!');
  } catch (error) {
    console.error('❌ Error truncating table:', error);
  } finally {
    await sequelize.close();
  }
}

truncateFormTypes();
