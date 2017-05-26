package com.project.CucumberMaven;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(
 features="Feature",
 glue="com.project.StepDefination",
 format= {"pretty","html:target/HTMLCucumberReport","json:target/Cucumber.json"},
 tags={"@Second"}
)
public class RunnerClassJUnit 
{
	
	

}
