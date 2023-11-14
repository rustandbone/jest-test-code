const UserService = require("./user_service");
const UserClient = require("./user_client");

jest.mock("./user_client");

describe("mock user client, test service", () => {
  const login = jest.fn(() => {
    access_token: "test";
  });

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;
  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("login", async () => {
    await userService.login("test", "test");
    expect(login).toHaveBeenCalledTimes(1);
  });
});
