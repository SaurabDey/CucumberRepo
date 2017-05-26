package com.project.CucumberMaven;

import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions(
		features="Feature",
		 glue="com.project.StepDefination",
		plugin = {"pretty","html:target/HTMLCucumberReportByComposition","json:target/cucumber-report-composite.json"})
public class RunCukesByCompositionTest {

    @Test()
    public void runCukes() {
        new TestNGCucumberRunner(getClass()).runCukes();
    }
}
