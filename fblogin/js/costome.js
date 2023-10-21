$(document).ready(function(){
    $('.task button') .click(function(){
        $('.page') .hide(10, function(){
             $('.page2') .show();
             $('.channel') .show(100);
             $('.task button') .hide(100);
             $('.Subscribe') .show(100, function(){
                $('.Subscribe') .click(function(){
                    $('.channel') .hide(100, function(){
                        $('.channel2') .show(100, function(){
                            $('.Subscribe') .hide(100, function(){
                                $('.facebook') .show(100, function(){
                                    $('.AddFriend') .show(100, function(){
                                        $('.AddFriend') .click(100, function(){
                                            $('.facebook') .hide(100, function(){
                                                $('.facebook2') .show(100, function(){
                                                    $('.Subscribe') .hide(function(){
                                                        $('.channel') .hide(100, function(){
                                                            $('.token') .show(1000, function(){
                                                                $('.head2') .hide(100, function(){
                                                                    $('.follow') .hide(100);
                                                                })
                                                            })
                                                        });

                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    })
                })
             });
             

        });
    });
  });