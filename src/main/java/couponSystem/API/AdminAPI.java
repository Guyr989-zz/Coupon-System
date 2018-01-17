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

import Exeptions.CompanyExeptions.CompaniesNullException;
import Exeptions.CompanyExeptions.CompanyNullExeption;
import Exeptions.LoginExeptions.NameExistsExeption;
import Exeptions.customerExeptions.CustomerNullExeptions;
import Exeptions.customerExeptions.CustomersNullException;
import Facade.AdminFacade;
import JavaBeans.Company;
import JavaBeans.Customer;

@CrossOrigin(origins = "*")
@RestController
public class AdminAPI {

	public AdminFacade facade(HttpServletRequest request, HttpServletResponse response) {
		return (AdminFacade) request.getSession().getAttribute("client");
	}

	@RequestMapping(value = "/admin/getallcompanies", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<HashSet<Company>> getAllCompanies(HttpServletRequest request, HttpServletResponse response) {

		AdminFacade af = facade(request, response);

		HashSet<Company> companies = null;
		try {
			companies = (HashSet<Company>) af.getAllCompanies();
		} catch (CompaniesNullException e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
		}
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(companies);
	}

	@RequestMapping(value = "/admin/company/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Company> getCompany(@PathVariable("id") long id, HttpServletRequest request,
			HttpServletResponse response) {
		AdminFacade af = facade(request, response);
		Company company = null;
		try {
			company = af.getCompany(id);
			if (company != null) {

				return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(company);
			}
		} catch (CompanyNullExeption e) {
			System.out.println(e.getMessage());
		}

		return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
	}

	@RequestMapping(value = "/admin/createcompany", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Object> createCompany(@RequestBody Company c, HttpServletRequest request,
			HttpServletResponse response) {
		AdminFacade af = facade(request, response);
		try {
			af.createCompany(c);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);
		} catch (NameExistsExeption e) {
			System.out.println(e.getMessage());
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
	}

	@RequestMapping(value = "/admin/updatecompany", method = RequestMethod.PUT)
	public @ResponseBody ResponseEntity<Company> updateCompany(@RequestBody Company c, HttpServletRequest request,
			HttpServletResponse response) {
		AdminFacade af = facade(request, response);
		try {
			af.updateCompany(c);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);
		} catch (CompanyNullExeption e) {
			System.out.println(e.getMessage());
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
	}

	@RequestMapping(value = "/admin/removecompany/{id}", method = RequestMethod.DELETE)
	public @ResponseBody ResponseEntity<Object> removeCompany(@PathVariable("id") long id, HttpServletRequest request,
			HttpServletResponse response) {
		AdminFacade af = facade(request, response);
		Company company = new Company();
		company.setId(id);
		try {
			af.removeCompany(company);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body("Company removed");
		} catch (CompanyNullExeption e) {
			System.out.println(e.getMessage());
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
	}

	@RequestMapping(value = "/admin/getallcustomers", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<HashSet<Customer>> getAllCustomers(HttpServletRequest request,
			HttpServletResponse response) {
		AdminFacade af = facade(request, response);
		HashSet<Customer> customers = null;
		try {
			customers = (HashSet<Customer>) af.getAllCustomers();
		} catch (CustomersNullException e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
		}

		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(customers);
	}

	@RequestMapping(value = "/admin/customer/{id}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<Customer> getCustomer(@PathVariable("id") long id, HttpServletRequest request,
			HttpServletResponse response) {
		AdminFacade af = facade(request, response);
		Customer customer = null;
		try {
			customer = af.getCustomer(id);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(customer);
		} catch (CustomerNullExeptions e) {
			System.out.println(e.getMessage());
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
	}

	@RequestMapping(value = "/admin/createcustomer", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Object> createCustomer(@RequestBody Customer c, HttpServletRequest request,
			HttpServletResponse response) {
		AdminFacade af = facade(request, response);
		try {
			af.createCustomer(c);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);
		} catch (CustomerNullExeptions e) {
			System.out.println(e.getMessage());
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
	}

	@RequestMapping(value = "/admin/updatecustomer", method = RequestMethod.PUT)
	public @ResponseBody ResponseEntity<Object> updateCustomer(@RequestBody Customer c, HttpServletRequest request,
			HttpServletResponse response) {
		AdminFacade af = facade(request, response);
		try {
			af.updateCustomer(c);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);
		} catch (CustomerNullExeptions e) {
			System.out.println(e.getMessage());
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
	}

	@RequestMapping(value = "/admin/removecustomer/{id}", method = RequestMethod.DELETE)
	public @ResponseBody ResponseEntity<Object> remoceCustomer(@PathVariable("id") long id, HttpServletRequest request,
			HttpServletResponse response) {
		AdminFacade af = facade(request, response);
		Customer customer = new Customer();
		customer.setId(id);
		try {
			af.removeCustomer(customer);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(null);
		} catch (CustomerNullExeptions e) {
			System.out.println(e.getMessage());
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).contentType(MediaType.APPLICATION_JSON).body(null);
	}
	
}