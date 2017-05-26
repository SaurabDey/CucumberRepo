package com.project.CucumberMaven;

import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions
(
 features="Feature",
 glue="com.project.StepDefination",
 format= {"pretty","html:target/HTMLCucumberReport","json:target/Cucumber.json"}
 //tags="@vish"
)
public class RunnerClassTestNG extends AbstractTestNGCucumberTests
{

	@Test
	public void f()
	{
		
	}
}
