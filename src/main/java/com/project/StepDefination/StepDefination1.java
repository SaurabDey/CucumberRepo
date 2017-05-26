package com.project.StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefination1
{
	WebDriver driver;
	
	
	@Before
	public void setup()
	{
		System.setProperty("webdriver.chrome.driver", "Resource/chromedriver.exe");
		driver= new ChromeDriver();//Initialize
		driver.manage().window().maximize();
		driver.navigate().to("https://www.facebook.com/login/");
	}
	
	@Given("^I have the browser$")
	public void back1() throws InterruptedException
	{
		
		Thread.sleep(5000);
		String title=driver.getTitle();
		System.out.println(title);
	}
	@And("^I want to remove the cookies$")
	public void back2() throws InterruptedException
	{
		Thread.sleep(5000);
		String URL=driver.getCurrentUrl();
		System.out.println(URL);
		
	}
	
	@Given("^I have login page of facebook$")
	public void i_have_login_page_of_facebook() throws Throwable 
	{
		
		
		
		
	}

	@When("^I login using (.*) and (\\w+)$")
	public void i_login_using_saurab_and_saurab(String userID,String password) throws Throwable {

		driver.findElement(By.name("email")).sendKeys(userID);
		
		driver.findElement(By.name("pass")).sendKeys(password);
		
		driver.findElement(By.name("login")).click();
		
			
	}
	
	@But("^My modified fuction$")
	public void method()
	{
		System.out.println("Modified function");
	}

//	@Then("^I quit the browser$")
//	public void i_quit_the_browser() throws Throwable {
//		driver.quit();
//	}

	@After
	public void teardown()
	{
		driver.quit();
	}
	
	
}
