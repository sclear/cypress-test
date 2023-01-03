describe("My First Test", () => {
  it("Does not do much!", () => {
    // 访问一个页面
    cy.visit("http://baidu.com/");

    // 查询一个元素
    cy.get("#kw").type("测试一下");

    cy.get(".s_btn_wr").click();

    cy.contains("百度一下");
  });
});
