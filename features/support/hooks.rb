After do |scenario|
  add_screenshot(scenario)
  add_browser_logs if scenario.failed?
end

def add_screenshot(scenario)
  scenario_name = scenario.name.gsub(/[^A-Za-z0-9]/, '').gsub(' ', '_').downcase
  screenshot = "#{scenario_name}.png"
  page.save_screenshot(screenshot)
  attach(screenshot, 'image/png')
end

def add_browser_logs
  time_now = Time.zone.now
  # Getting current URL
  current_url = Capybara.current_url
  # Gather browser logs
  logs = page.driver.browser.manage.logs.get(:browser).map { |line| [line.level, line.message] }
  # Remove warnings and info messages
  logs.reject! { |line| ['WARNING', 'INFO'].include?(line.first) }

  attach(time_now.strftime("%Y-%m-%d-%H-%M-%S\n") +
        "Current URL: #{current_url}\n" +
        logs.join("\n"), 'text/plain')
end
