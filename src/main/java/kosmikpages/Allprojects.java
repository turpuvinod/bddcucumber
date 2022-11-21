package kosmikpages;

import org.openqa.selenium.By;

import base.base;

public class Allprojects  extends base {
	
	public static By profileButton = By.xpath("//button[@title='User preferences and organizations']");
	public static By signOutButton = By.xpath("//a[text()='Sign out']");
	public static By welcomeBackText = By.xpath("//h1[text()='Welcome back!']");
	public static By myProjectsText = By.xpath("//h3[text()='My Projects']");

	public static void clickProfileButton() {

		driver.findElement(profileButton).click();
	}

	public static void clickSignOutButton() {

		driver.findElement(signOutButton).click();
	}
	
	
	public static boolean welcomeBackPresence() {
		
		boolean result = driver.findElement(welcomeBackText).isDisplayed();
		
		return result;
	}
	
	
	
	public static String captureMyProjectsText() {
		
		
		String s = "";
		
		
		s= driver.findElement(myProjectsText).getText();
		
		return s;
		
		
	}
}


