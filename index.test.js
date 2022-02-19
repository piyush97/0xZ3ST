const rewire = require("rewire")
const index = rewire("./index")
const register = index.__get__("register")
const validate_email = index.__get__("validate_email")
const validate_password = index.__get__("validate_password")
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

describe("register", () => {
  test("0", () => {
    register();
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
    let result = validate_email("ponicode.com");
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

// @ponicode
describe("validate_password", () => {
    test("0", () => {
        let result = validate_password(6)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = validate_password(7.0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = validate_password(5)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = validate_password(7)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = validate_password(6.0)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = validate_password(Infinity)
        expect(result).toMatchSnapshot()
    })
})
