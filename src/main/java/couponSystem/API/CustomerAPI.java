package couponSystem.API;

import java.util.HashSet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import Enums.types.CouponType;
import Exeptions.couponExeptions.CouponsNullException;
import Exeptions.customerExeptions.PurchaseException;
import Facade.CustomerFacade;
import JavaBeans.Coupon;
import JavaBeans.Customer;

@CrossOrigin(origins = "*")
@RestController
public class CustomerAPI {

	public CustomerFacade facade(HttpServletRequest request, HttpServletResponse response) {
		return (CustomerFacade) request.getSession().getAttribute("client");
	}

	@RequestMapping(value = "/customer/customername", method = RequestMethod.GET)
	public ResponseEntity<Customer> customerName(HttpServletRequest request, HttpServletResponse response) {

		CustomerFacade cf = facade(request, response);

		Customer customer = cf.getThisCustomer();

		if (customer != null) {
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(customer);
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);

	}

	@RequestMapping(value = "/customer/purchasecoupon/", method = RequestMethod.POST)
	public ResponseEntity<Coupon> purchasedCoupon(@RequestBody Coupon c, HttpServletRequest request,
			HttpServletResponse response) {
		CustomerFacade cf = facade(request, response);
		try {
			cf.purchaseCoupon(c);
		} catch (PurchaseException e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(c);

		}
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);
	}

	@RequestMapping(value = "/customer/getallpurchasedcoupons", method = RequestMethod.GET)
	public @ResponseBody HashSet<Coupon> getAllPurchasedCoupons(HttpServletRequest request,
			HttpServletResponse response) {
		HashSet<Coupon> purchasedCoupons = null;
		CustomerFacade cf = facade(request, response);
		try {
			purchasedCoupons = (HashSet<Coupon>) cf.getAllPurchacedCoupons();
		} catch (CouponsNullException e) {
			System.out.println(e.getMessage());
		}
		return purchasedCoupons;
	}

	@RequestMapping(value = "/customer/getpurchasedcouponbytype/{type}", method = RequestMethod.GET)
	public @ResponseBody HashSet<Coupon> getPurchasedCouponByType(@PathVariable("type") CouponType type,
			HttpServletRequest request, HttpServletResponse response) {
		HashSet<Coupon> couponsByType = null;
		CustomerFacade cf = facade(request, response);
		
		try {
			couponsByType = (HashSet<Coupon>) cf.getAllPurchacedCouponsByType(type);
		} catch (CouponsNullException e) {
			System.out.println(e.getMessage());
		}
		return couponsByType;
	}

	@RequestMapping(value = "/customer/getpurchasedcouponbyprice/{price}", method = RequestMethod.GET)
	public @ResponseBody HashSet<Coupon> getPurchasedCouponByPrice(@PathVariable("price") double price,
			HttpServletRequest request, HttpServletResponse response) {
		CustomerFacade cf = facade(request, response);

		HashSet<Coupon> couponsByprice = null;
		try {
			couponsByprice = (HashSet<Coupon>) cf.getAllPurchacedCouponsByPrice(price);
		} catch (CouponsNullException e) {
			System.out.println(e.getMessage());
		}
		return couponsByprice;
	}

	@RequestMapping(value = "/customer/getallcouponsforviewing", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<HashSet<Coupon>> getAllCouponsForViewing(HttpServletRequest request,
			HttpServletResponse response) {
		CustomerFacade cf = facade(request, response);

		HashSet<Coupon> coupons = new HashSet<>();
		
		try {
			coupons = (HashSet<Coupon>) cf.getAllCouponsForViewing();
		} catch (CouponsNullException e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
		}
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
	}

}
