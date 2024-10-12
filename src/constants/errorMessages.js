export default {
  /**
   * INVALID_EMAIL_FORMAT (400): The email address provided does not match
   * the required format.
   */
  INVALID_EMAIL_FORMAT: 'The email address provided does not match the required format',

  /**
   * INVALID_PASSWORD (400): The password provided is incorrect.
   */
  INVALID_PASSWORD: 'The password provided is incorrect',

  /**
   * EMAIL_NOT_FOUND (404): The email address provided does not exist in the system.
   */
  EMAIL_NOT_FOUND: 'The email address provided does not exist in the system',

  /**
   * ACCOUNT_NOT_FOUND (404): The account associated with the provided identifier does not exist in the system.
   */
  ACCOUNT_NOT_FOUND: 'The account associated with the provided identifier does not exist in the system',

  /**
   * DUPLICATE_EMAIL (409): An account with this email address already exists
   * in the system.
   */
  DUPLICATE_EMAIL: 'An account with this email address already exists',

  /**
   * ACCOUNT_CREATION_FAILED (500): The server encountered an error while attempting
   * to create the user account.
   */
  ACCOUNT_CREATION_FAILED: 'The server encountered an error while attempting to create the user account',
};
