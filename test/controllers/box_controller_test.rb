require 'test_helper'

class BoxControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get box_home_url
    assert_response :success
  end

end
