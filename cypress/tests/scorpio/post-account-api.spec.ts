describe("Post Accounts Workflow", () => {
  const POST_ACCOUNT = () => {
    return cy
      .request({
        url: `https://qa.scorpion.co/optisearch/review/v1/api/accounts/ED95B7CF-FF82-4F99-8E01-CFA35E663005/businesses/b96be9d0-6cab-9946-a458-2a51ee919948/reviews?offset=0&count=100`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "43FF78A0-24BE-4ECF-AE26-D43CB9EA4038",
        },
        body: {},
      })
      .then((response) => {
        expect(response.status, "Expect response status to equal 200").to.eql(
          200
        );
      })
      .its("body")
      .then((body) => {
        return body;
      });
  };

  it("Create a new card, update and get the card and verify info", () => {
    POST_ACCOUNT().then((res: any) => {
      expect(res.result.count, "Expect count to equal 64").to.eql(64);
    });
  });
});
