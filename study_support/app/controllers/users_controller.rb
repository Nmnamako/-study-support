class UsersController < ApplicationController
  
  def my_page
    # ユーザー編集追加時以下利用
    @user = current_user
    @times = @user.usage_times
    
    # コンソールチェック用
    # pp @day2
    
  end
  
end
