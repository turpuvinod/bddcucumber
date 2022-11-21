package Runnerfile;


import org.testng.annotations.AfterClass;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import base.*;

@CucumberOptions(features = {"feature" },
                 glue =     {"StepdefincationStudio"},
                 plugin =   { "pretty","html:target/cucumber-reports","json:target/cucumber-reports/Cucumber.json",
                		     "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/extentreport.html"},
                
                 monochrome = true)
                // tags="@login")
public class Runner extends AbstractTestNGCucumberTests{
	
	
	
	
	

}
