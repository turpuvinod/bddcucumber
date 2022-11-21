package utils;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import base.base;

	
	public class ReportingManager {

		//public static String screenshotName;

		public static String captureScreenshot() throws IOException {

			String screenshotPath = "";

			//1. take screenshot object
			TakesScreenshot scrShot = (TakesScreenshot) base.driver;

			//2. store the file in source file
			File sourceFile = scrShot.getScreenshotAs(OutputType.FILE);
		
			//3. creating the destination path to store the file
			File destinationPath = new File("D://screenprint//"
					+ "ScreenCapture" + System.currentTimeMillis() + ".png");
			
			// 4. copy the source file into destination path
			FileUtils.copyFile(sourceFile, destinationPath);

			
			//5. capturing the  in string
			screenshotPath = destinationPath.getAbsolutePath();

			return screenshotPath;
		}

	}


