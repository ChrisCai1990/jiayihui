$(function() {
	var t = function() {
		this.init()
	};
	t.prototype = {
		init: function() {
			var t = this;
			t.HomeNav(), t.toggleLink(), t.NavCoty(), t.goTop(), t.openNewTarget(), t.otherAnimate(), t.serveList(), t.insuranceList(), t.healthList(), t.healthyList(), t.showServeDesc(), t.insuranceLocal(), t.initBind()
		},
		toggleLink: function() {
			var t = location.host,
				e = $('a.topbar_nav_list:contains("保险服务")'),
				i = window.location.origin,
				n = $(window).width();
			t.indexOf("fz") > -1 || (n <= 770 ? e.attr("href", i + "/insurance_copy") : e.attr("href", i + "/insurance"))
		},
		initBind: function() {
			var t = this;
			$("body").on("mouseenter", "#btnNext,#btnPrev", $.proxy(t.moveSlide, t)).on("mouseleave", "#btnNext,#btnPrev", $.proxy(t.leaveSlide, t)), $(window).resize(function() {
				t.toggleLink()
			})
		},
		moveSlide: function(t) {
			var e = $(t.currentTarget);
			e.trigger("click"), globalSlideId = setInterval(function() {
				e.trigger("click")
			}, 3e3)
		},
		leaveSlide: function() {
			clearInterval(globalSlideId)
		},
		showServeDesc: function() {
			var t = $(".index_serve_list li").eq(0).find(".index_serve_list_link"),
				e = $(document.body).width();
			e >= 770 && t.css("top", "0"), $(".index_serve_list li").on("mouseover", function(e) {
				var i = $(e.currentTarget),
					n = i.index();
				0 != n ? t.css("top", i.height()) : t.css("top", "")
			})
		},
		insuranceLocal: function() {
			var t = $(".insurance_direct_billing");
			t.length && t.find(".insurance_item:odd").css("marginLeft", "35px")
		},
		serveList: function() {
			$('a.topbar_nav_list:contains("å»çæå¡")').hover(function(t) {
				var e = $(t.currentTarget),
					i = e.offset().left - 35,
					n = $(".dxy_topbar").height(),
					o = $(document.body).width();
				o >= 770 && $(".J-serve-list").css({
					left: i,
					top: n
				}).animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast")
			}, function(t) {
				var e = setTimeout(function() {
					$(".J-serve-list").hide()
				}, 2e3);
				$(".J-serve-list").hover(function() {
					clearTimeout(e)
				}, function() {
					$(this).hide()
				})
			})
		},
		insuranceList: function() {
			var t = location.host;
			t.indexOf("fz") > -1 || $('a.topbar_nav_list:contains("ä¿é©æå¡")').hover(function(t) {
				var e = $(t.currentTarget),
					i = e.offset().left - 35,
					n = $(".dxy_topbar").height(),
					o = $(document.body).width();
				o >= 770 && $(".J-insurance-list").css({
					left: i,
					top: n
				}).animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast")
			}, function(t) {
				var e = setTimeout(function() {
					$(".J-insurance-list").hide()
				}, 2e3);
				$(".J-insurance-list").hover(function() {
					clearTimeout(e)
				}, function() {
					$(this).hide()
				})
			})
		},
		healthList: function() {
			$('a.topbar_nav_list:contains("å³äºæä»¬")').hover(function(t) {
				var e = $(t.currentTarget),
					i = e.offset().left - 35,
					n = $(".dxy_topbar").height(),
					o = $(document.body).width();
				o >= 770 && $(".J-health-list").css({
					left: i,
					top: n
				}).animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast")
			}, function(t) {
				var e = setTimeout(function() {
					$(".J-health-list").hide()
				}, 2e3);
				$(".J-health-list").hover(function() {
					clearTimeout(e)
				}, function() {
					$(this).hide()
				})
			})
		},
		healthyList: function() {
			$('a.topbar_nav_list:contains("å¥åº·ç®¡ç")').hover(function(t) {
				var e = $(t.currentTarget),
					i = e.offset().left - 35,
					n = $(".dxy_topbar").height(),
					o = $(document.body).width();
				o >= 770 && $(".J-healthy-list").css({
					left: i,
					top: n
				}).animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast")
			}, function(t) {
				var e = setTimeout(function() {
					$(".J-healthy-list").hide()
				}, 2e3);
				$(".J-healthy-list").hover(function() {
					clearTimeout(e)
				}, function() {
					$(this).hide()
				})
			})
		},
		HomeNav: function() {
			$(".topbar_nav_btn").eq(0).toggle(function() {
				return $(this).parent().find(".topbar_nav").eq(0).animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast"), $(this).addClass("active"), !1
			}, function() {
				return $(this).parent().find(".topbar_nav").eq(0).animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast"), $(this).removeClass("active"), !1
			})
		},
		NavCoty: function() {
			$(".topbar_local_btn").find(".topbar_local_icon").click(function() {
				return $(this).parent().find(".topbar_local_list").animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast"), !1
			}), $(".topbar_local_list").hover(function() {
				$(this).show()
			}, function() {
				$(this).slideUp(100)
			}), $(document).on("click", function() {
				$(".topbar_local_list").hide()
			}), $(".topbar_local_list>li").hover(function() {
				$(this).find("ul").animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast"), $(this).find("a").eq(0).addClass("nav_active")
			}, function() {
				$(this).find("ul").animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast"), $(this).find("a").eq(0).removeClass("nav_active")
			}), $(".topbar_local_btn").find(".topbar_local_btn_click").click(function() {
				var t = $(".topbar_local_btn_click").html().slice(0, 2),
					e = $(".topbar_local_btn_click").html().slice(2, 5);
				return $(this).parent().find('a:contains("' + t + '")').addClass("nav_active"), $(this).parent().find('a:contains("' + e + '")').addClass("nav_active"), $(this).parent().find(".topbar_local_list").animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast"), !1
			})
		},
		goTop: function() {
			$(window).scroll(function(t) {
				$(window).scrollTop() > 200 ? $(".scroll_to_top").addClass("show") : $(".scroll_to_top").removeClass("show")
			}), $(".scroll_to_top").click(function(t) {
				$("body,html").animate({
					scrollTop: 0
				}, 1e3)
			})
		},
		openNewTarget: function() {
			$(".topbar_nav").find(".topbar_nav_list:eq(2)").attr("target", "_blank")
		},
		otherAnimate: function() {
			$(".index_appoint").waypoint(function() {
				$(".index_appoint").addClass("appoint_active")
			}, {
				offset: "99%"
			}), $(".index_welcome_comtent").waypoint(function() {
				$(window).width() > 770 && $(".index_welcome_comtent").addClass("index_welcome_active")
			}, {
				offset: "99%"
			}), $(".index_serve_content").waypoint(function() {
				$(window).width() > 770 && $(".index_serve_content").addClass("index_serve_active")
			}, {
				offset: "99%"
			}), $(".index_local_hz_1").hover(function() {
				$(this).find(".index_local_intro_1").animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast")
			}, function() {
				$(this).find(".index_local_intro_1").animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast")
			}), $(".index_local_hz_2").hover(function() {
				$(this).find(".index_local_intro_1").animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast")
			}, function() {
				$(this).find(".index_local_intro_1").animate({
					height: "toggle",
					opacity: "toggle"
				}, "fast")
			});
			var t = !0;
			if($(".about_bxslider").find("li").length <= 3 && (t = !1), $(".about_bxslider").bxSlider({
					captions: !0,
					auto: t,
					pause: 6e3,
					controls: !1
				}), $(".about_mobile_bxslider").bxSlider({
					controls: !1
				}), $(".index_cooperate").find("#listBox").length > 0) {
				var e = !1;
				$(".index_cooperate").find("li").length > 4 && (e = !0), $(".index_cooperate").find("#listBox").imageScroller({
					next: "btnNext",
					prev: "btnPrev",
					frame: "list",
					child: "li",
					auto: e,
					size: 246
				})
			} else if($(".about_cooperate").find("ul").length > 0) {
				var e = !1;
				$(".about_cooperate").find("li").length > 4 && (e = !0), $(".about_cooperate").find("#listBox").imageScroller({
					next: "btnNext",
					prev: "btnPrev",
					frame: "list",
					child: "li",
					auto: e,
					size: 185
				})
			}
			$(".service_list_content div").each(function(t) {
				for(var e = $(this).height(), i = $("p", $(this)).eq(0); i.outerHeight() > e;) i.text(i.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."))
			}), $(".story_intro_content").each(function(t) {
				$(this).css("overflow", "visible");
				var e = $(this).find("p")[0];
				e.style.textAlign = "justify", e.style.letterSpacing = "-.15em", e.innerHTML = e.innerHTML.split("").join(" ");
				for(var i = $(this).height(), n = $("p", $(this)).eq(0); n.outerHeight() > i;) n.text(n.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."))
			}), $(".story_intro_title").each(function(t) {
				for(var e = $(this).height(), i = $("a", $(this)).eq(0); i.outerHeight() > e;) i.text(i.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."))
			}), 0 == $(".detail_doctors_block").find("li").length && $(".detail_doctors_ps").hide(), $(".bxslider").bxSlider({
				captions: !0,
				auto: !0,
				pause: 6e3,
				controls: !1
			})
		}
	};
	new t
});