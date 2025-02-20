import { test, expect } from "@playwright/test";

test.describe("KreditAfrica-website", async () => {
  test.only("KrediAfrica-website", async ({ page }) => {
    await test.step("🌐Navigating to KreditArfrica", async () => {
      await page.goto("https://www.kreditafrica.com/");
    });
    await test.step("⌛️Waiting for page to load", async () => {
      await page.waitForTimeout(5000);
    });
    await test.step("📜Verifying the Hero page,", async () => {
      await expect
        .soft(
          page.getByRole("heading", { name: "Empowering Inclusive" }),
          "🧪Empowering Inclusive financial futures for Africa using AI should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.getByText("We want to empower"),
          "🧪 subheading should be visible"
        )
        .toBeVisible();
      await expect
        .soft(page.locator(".hero-image-2"), "🧪 Image should be visible")
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "form[class='flex gap-1 items-center p-1 rounded-[75px] border border-[#B8B8B8] w-full sm:w-[90%]']"
          ),
          "🧪 Email Placeholder should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(".section1-title-heading.tracking-wide"),
          "🧪 second heading Hero page should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(".section1-title-description"),
          "🧪 sub heading should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "div[id='alternative'] div[class='section1-grid-row-title'] div h3[class='heading tracking-wide']"
          ),
          "🧪 Third heading should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "div[id='alternative'] div[class='section1-grid-row-title'] div p[class='description']"
          ),
          "🧪 subheading should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator("div[id='alternative'] img[class='section1-image']"),
          "🧪 Image should be visible"
        )
        .toBeVisible();
      await expect
        .soft(
          page.locator(
            "div[id='cutting-edge'] div[class='section1-grid-row-title'] div h3[class='heading tracking-wide']"
          ),
          "🧪 Third heading should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "div[id='cutting-edge'] div[class='section1-grid-row-title'] div p[class='description']"
          ),
          "🧪 Description should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator("div[id='cutting-edge'] img[class='section1-image']"),
          "🧪 Image should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "div[id='precision'] div[class='section1-grid-row-title'] div h3[class='heading tracking-wide']"
          ),
          "🧪 Fourth heading should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "div[id='precision'] div[class='section1-grid-row-title'] div p[class='description']"
          ),
          "🧪 Description should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator("div[id='precision'] img[class='section1-image']"),
          "🧪 Image should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "div[id='compliance'] div[class='section1-grid-row-title'] div h3[class='heading tracking-wide']"
          ),
          "🧪 Fifth heading should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "div[id='compliance'] div[class='section1-grid-row-title'] div p[class='description']"
          ),
          "🧪 Description should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator("div[id='compliance'] img[class='section1-image']"),
          "🧪 Image should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "h1[class='font-fidena text-[44px] mt-[50px] max-sm:text-[36px] max-w-[753px] w-full text-[#021512] tracking-wide font-bold leading-[130%]']"
          ),
          "🧪 sixth Heading should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)"
          ),
          "🧪 Data Integrity should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)"
          ),
          "🧪 Decription should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)"
          ),
          "🧪 Enhancing Access should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)"
          ),
          "🧪 Decription should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)"
          ),
          "🧪 Responsible Lending should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)"
          ),
          "🧪 Description should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)"
          ),
          "🧪 Innovation should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)"
          ),
          "🧪 Description should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)"
          ),
          "🧪 Compliance and Ethical Conduct should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)"
          ),
          "🧪 Description should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)"
          ),
          "🧪 Financial Well-being should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)"
          ),
          "🧪 Description should be visible"
        )
        .toBeVisible();

      await expect
        .soft(
          page.locator(
            "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)"
          ),
          "🧪 Frequently asked questions Heading should be visible"
        )
        .toBeVisible();

        await expect
          .soft(
            page.locator(
              "body div section div div:nth-child(1) div:nth-child(1) h3:nth-child(1)"
            ),
            "🧪 Frequently asked question (1) should be visible"
          )
          .toBeVisible();

          await expect
            .soft(
              page.locator(
                "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1)"
              ),
              "🧪 Dropdown button should be visible"
            )
            .toBeVisible();

            await expect
              .soft(
                page.locator(
                  "body div section div div:nth-child(1) div:nth-child(1) h3:nth-child(1)"
                ),
                "🧪 Frequently asked question (2) should be visible"
              )
              .toBeVisible();

              await expect
                .soft(
                  page.locator(
                    "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1) > path:nth-child(1)"
                  ),
                  "🧪 Dropdown button should be visible"
                )
                .toBeVisible();

                await expect
                  .soft(
                    page.locator(
                      "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1) > path:nth-child(1)"
                    ),
                    "🧪 Frequently asked question (3) should be visible"
                  )
                  .toBeVisible();

                  await expect
                    .soft(
                      page.locator(
                        "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1) > path:nth-child(1)"
                      ),
                      "🧪 Dropdown button should be visible"
                    )
                    .toBeVisible();

                    await expect
                      .soft(
                        page.locator(
                          "section div:nth-child(4) div:nth-child(1) h3:nth-child(1)"
                        ),
                        "🧪Frequently asked question (4) should be visible"
                      )
                      .toBeVisible();

                       await expect
                         .soft(
                           page.locator(
                             "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1)"
                           ),
                           "🧪 Dropdown button should be visible"
                         )
                         .toBeVisible();

                         await expect
                           .soft(
                             page.locator(
                               "section div:nth-child(5) div:nth-child(1) h3:nth-child(1)"
                             ),
                             "🧪 Frequently asked question (5) should be visible"
                           )
                           .toBeVisible();

                           await expect
                             .soft(
                               page.locator(
                                 "section div:nth-child(5) div:nth-child(1) h3:nth-child(1)"
                               ),
                               "🧪 Dropdown button should be visible"
                             )
                             .toBeVisible();

                             await expect
                               .soft(
                                 page.locator(
                                   "section div:nth-child(5) div:nth-child(1) h3:nth-child(1)"
                                 ),
                                 "🧪 Frequently asked question (6) should be visible"
                               )
                               .toBeVisible();

                               await expect
                                 .soft(
                                   page.locator(
                                     "section div:nth-child(5) div:nth-child(1) h3:nth-child(1)"
                                   ),
                                   "🧪 Dropdown button should be visible"
                                 )
                                 .toBeVisible();

                                 await expect
                                   .soft(
                                     page.locator(
                                       "section div:nth-child(5) div:nth-child(1) h3:nth-child(1)"
                                     ),
                                     "🧪 Ready to take the next step with you finance should be visible"
                                   )
                                   .toBeVisible();

                                   await expect
                                     .soft(
                                       page.locator(
                                         "button[class='w-[178px] h-12] _btn_7f7cr_1 _tertiary_7f7cr_50']"
                                       ),
                                       "🧪 Get started button should be visible"
                                     )
                                     .toBeVisible();

                                     await expect
                                       .soft(
                                         page.locator(
                                           "button[class='w-[178px] h-12] _btn_7f7cr_1 _tertiary_7f7cr_50']"
                                         ),
                                         "🧪 Footer details :should be visible"
                                       )
                                       .toBeVisible();


                                 
    });
  });
});
