package kosmikpages;



import org.openqa.selenium.By;

import base.base;

public class loginkosmik extends base {
	
	public static By emailInputBox = By.id("user_email");
	public static By passwordInputBox=By.id("user_password");
	public static By submitButton=By.name("commit");
	public static By invalidErrorMessage = By.xpath("//p[text()='Invalid email or password.']");

	public static void enterEmailId(String arg1) {

		driver.findElement(emailInputBox).sendKeys(arg1);

	}

	public static void enterPassword(String arg1) {

		driver.findElement(passwordInputBox).sendKeys(arg1);
	}

	public static void clickSigninButton() {

		driver.findElement(submitButton).click();
	}

	public static String captureErrorMessage() {

		String s = "";

		s = driver.findElement(invalidErrorMessage).getText();

		return s;

	}

}
