package couponSystem.API;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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
import Exeptions.CompanyExeptions.CompanyNullExeption;
import Exeptions.couponExeptions.CouponExistsException;
import Exeptions.couponExeptions.CouponNullExeption;
import Exeptions.couponExeptions.CouponsNullException;
import Facade.CompanyFacade;
import JavaBeans.Company;
import JavaBeans.Coupon;

@CrossOrigin(origins = "*")
@RestController
public class CompanyAPI {


	public CompanyFacade facade(HttpServletRequest request, HttpServletResponse response) {
		return (CompanyFacade) request.getSession().getAttribute("client");
	}

	@RequestMapping(value = "/company/getcompanyname", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Company> getCompany(HttpServletRequest request, HttpServletResponse response)
			throws CompanyNullExeption {
		CompanyFacade cf = facade(request, response);
		Company company = null;
		company = cf.getThisCompany();
		if (company != null) {
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(company);
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
	}

	// Get all this company coupons
	@RequestMapping(value = "/company/getallcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<HashSet<Coupon>> getAllCompanyCouponps(HttpServletRequest request,
			HttpServletResponse response) {
		HashSet<Coupon> coupons = null;
		try {
			CompanyFacade cf = facade(request, response);
			coupons = (HashSet<Coupon>) cf.getCompanyCoupons();
		} catch (CouponsNullException e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
		}
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
	}

	// Get this company coupon by id
	@RequestMapping(value = "/company/getcoupon/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Coupon> getCouponbyid(@PathVariable("id") long id, HttpServletRequest request,
			HttpServletResponse response) {
		Coupon coupon = null;
		try {
			CompanyFacade cf = facade(request, response);
			coupon = cf.getCoupon(id);
		} catch (CouponNullExeption e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
		}

		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupon);
	}

	// Get this company coupons by price
	@RequestMapping(value = "/company/getcouponsbyprice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<HashSet<Coupon>> getCouponsByPrice(@PathVariable("price") double price,
			HttpServletRequest request, HttpServletResponse response) {
		HashSet<Coupon> coupons = null;
		try {
			CompanyFacade cf = facade(request, response);
			coupons = (HashSet<Coupon>) cf.getCouponsByPrice(price);
		} catch (CouponsNullException e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
		}

		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
	}

	// Get this company coupons by end date
	@RequestMapping(value = "/company/getcouponsbydate/{date}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<HashSet<Coupon>> getCouponsByDate(@PathVariable("date") String date,
			HttpServletRequest request, HttpServletResponse response) throws ParseException {
		HashSet<Coupon> coupons = null;
		Date javaDate = convertStringToDate(date);
		try {
			CompanyFacade cf = facade(request, response);
			coupons = (HashSet<Coupon>) cf.getCouponsByDate(javaDate);
		} catch (CouponsNullException e) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
		}
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
	}

	// Get this company coupons by type
	@RequestMapping(value = "/company/getcouponsbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<HashSet<Coupon>> getAllCompanyCouponps(@PathVariable("type") CouponType type,
			HttpServletRequest request, HttpServletResponse response) {
		HashSet<Coupon> coupons = null;
		try {
			CompanyFacade cf = facade(request, response);
			coupons = (HashSet<Coupon>) cf.getCouponsByType(type);
		} catch (CouponsNullException e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);

		}
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
	}

	// create a coupon for this company
	@RequestMapping(value = "/company/createcoupon", method = RequestMethod.POST)
	public ResponseEntity<?> createCoupon(@RequestBody Coupon c, HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println(c);
		try {
			CompanyFacade cf = facade(request, response);
			cf.createCoupon(c);
			System.out.println(c);
		} catch (CouponExistsException e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
		}
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);

	}

	// update a coupon for this company
	@RequestMapping(value = "/company/updatecoupon", method = RequestMethod.PUT)
	public ResponseEntity<Coupon> updateCoupon(@RequestBody Coupon c, HttpServletRequest request,
			HttpServletResponse response) {
		try {
			CompanyFacade cf = facade(request, response);
			cf.updateCoupon(c);
		} catch (CouponNullExeption e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
		}
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);
	}

	// remove a coupon from this company
	@RequestMapping(value = "/company/removecoupon/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> removecoupon(@PathVariable("id") long id, HttpServletRequest request,
			HttpServletResponse response) {
		Coupon c = new Coupon();
		c.setId(id);
		try {
			CompanyFacade cf = facade(request, response);
			cf.removeCoupon(c);
		} catch (CouponNullExeption e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
	}

	// converts a string date to java.util.date
	public Date convertStringToDate(String date) throws ParseException {
		Date javaDate = new SimpleDateFormat("yyyy-MM-dd").parse(date);
		return javaDate;
	}

}
