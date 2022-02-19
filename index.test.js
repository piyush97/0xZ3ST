const rewire = require("rewire");
const index = rewire("./index");
const register = index.__get__("register");
const validate_email = index.__get__("validate_email");
const validate_password = index.__get__("validate_password");
const validate_field = index.__get__("validate_field");
const login = index.__get__("login");
/**
 * Tests for the register function
 * @return {void}
 * @author Piyush
 * @since 1.0
 * @version 1.0
 */
describe("register", () => {
  test("0", () => {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div id="wrapper0"><div>
        	<div id="email"></div>
        	<div id="password"></div>
        	<div id="full_name"></div>
        </div>
        </div>`
    );
    register();
    expect(document.getElementById("wrapper0")).to.matchSnapshot();
    document.body.removeChild(document.getElementById("wrapper0"));
  });
});

/**
 * @description Validate email address is valid or not and return true or false accordingly (Piyush)
 * @param {string} email
 * @returns {boolean}
 * @author Piyush
 * @since 1.0
 * @version 1.0
 *
 */
describe("validate_email", () => {
  test("0", () => {
    let result = validate_email("xpressio");
    expect(result).toMatchSnapshot();
  });

  test("1", () => {
    let result = validate_email("something@example.com");
    expect(result).toMatchSnapshot();
  });

  test("2", () => {
    let result = validate_email("piyushmehta.com");
    expect(result).toMatchSnapshot();
  });

  test("3", () => {
    let result = validate_email("email@Google.com");
    expect(result).toMatchSnapshot();
  });

  test("4", () => {
    let result = validate_email("TestUpperCase@Example.com");
    expect(result).toMatchSnapshot();
  });

  test("5", () => {
    let result = validate_email("");
    expect(result).toMatchSnapshot();
  });
});

/**
 * @description Validate password is valid or not and return true or false accordingly (Piyush)
 * @param {string} password
 * @returns {boolean}
 * @author Piyush
 * @since 1.0
 * @version 1.0
 *
 */
describe("validate_password", () => {
  test("0", () => {
    let result = validate_password(6);
    expect(result).toMatchSnapshot();
    expect(result).toBe(true);
  });

  test("1", () => {
    let result = validate_password(7.0);
    expect(result).toMatchSnapshot();
  });

  test("2", () => {
    let result = validate_password(5);
    expect(result).toMatchSnapshot();
  });

  test("3", () => {
    let result = validate_password(7);
    expect(result).toMatchSnapshot();
  });

  test("4", () => {
    let result = validate_password(6.0);
    expect(result).toMatchSnapshot();
  });

  test("5", () => {
    let result = validate_password(Infinity);
    expect(result).toMatchSnapshot();
  });

  test("6", () => {
    let result = validate_password(64);
    expect(result).toMatchSnapshot();
  });

  test("7", () => {
    let result = validate_password(5.0);
    expect(result).toMatchSnapshot();
  });

  test("8", () => {
    let result = validate_password(256);
    expect(result).toMatchSnapshot();
  });

  test("9", () => {
    let result = validate_password(10);
    expect(result).toMatchSnapshot();
  });

  test("10", () => {
    let result = validate_password(-Infinity);
    expect(result).toMatchSnapshot();
  });
});

/**
 * @description Validate field is valid or not and return true or false accordingly (Piyush)
 * @param {string} field
 * @returns {boolean}
 * @author Piyush
 * @since 1.0
 * @version 1.0
 */
describe("validate_field", () => {
  test("0", () => {
    let result = validate_field({ length: -1 });
    expect(result).toMatchSnapshot();
  });

  test("1", () => {
    let result = validate_field({ length: 1 });
    expect(result).toMatchSnapshot();
  });

  test("2", () => {
    let result = validate_field({ length: 0 });
    expect(result).toMatchSnapshot();
  });

  test("3", () => {
    let result = validate_field({ length: 0.0 });
    expect(result).toMatchSnapshot();
  });

  test("4", () => {
    let result = validate_field({ length: 1.0 });
    expect(result).toMatchSnapshot();
  });

  test("5", () => {
    let result = validate_field({ length: -Infinity });
    expect(result).toMatchSnapshot();
  });
});

/**
 * @description Validate login is valid or not and return true or false accordingly (Piyush)
 * @param {string} email
 * @param {string} password
 * @returns {boolean}
 * @author Piyush
 * @since 1.0
 * @version 1.0
 */
describe("login", () => {
  test("0", () => {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div id="wrapper0"><div>
        	<div id="email"></div>
        	<div id="password"></div>
        </div>
        </div>`
    );
    let result = login();
    expect(result).toMatchSnapshot();
    expect(document.getElementById("wrapper0")).to.matchSnapshot();
    document.body.removeChild(document.getElementById("wrapper0"));
  });
});
