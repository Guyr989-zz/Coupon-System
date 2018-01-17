package couponSystem.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import Enums.types.ClientType;
import Interfaces.CouponClientFacade;
import couponSystem.CouponSystem;

@Controller
public class LoginController {

	@RequestMapping(value = "/logincontroller", method = RequestMethod.POST)
	public @ResponseBody void ShowLoginForm(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {

		String user = request.getParameter("username");
		String password = request.getParameter("password");
		String selector = request.getParameter("selector");
		
		CouponClientFacade client = CouponSystem.getInstance().login(user, password, ClientType.valueOf(selector));
		

		
		if (client != null) {
			String url;
			switch (selector) {
			case "ADMIN":
				url = "Admin/index.html";
				request.getSession().setAttribute("client", client);
				response.sendRedirect(url);
				break;
			case "COMPANY":
				url = "Company/index.html";
				request.getSession().setAttribute("client", client);
				response.sendRedirect(url);
				break;
			case "CUSTOMER":
				url = "Customer/index.html";
				request.getSession().setAttribute("client", client);
				response.sendRedirect(url);
				break;
			default:
				url = "/index.html";
				request.getSession().setAttribute("client", client);
				response.sendRedirect(url);
				break;
			}
		} else {
			String url = "/index.html";
			response.sendRedirect(url);
		}

	}
}