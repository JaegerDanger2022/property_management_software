This is a senior developer

   <div
        className="propertyDetailsScreen"
        style={{ display: "grid", gridTemplateColumns: "9fr 3fr" }}
      >
        <div className="propertyDetails">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2vw",
            }}
          >
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: "1.3rem" }}
            >
              <strong>Property name:</strong>
              {name}
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: "1.3rem" }}
            >
              <strong>Property Address:</strong>
              {address}
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: "1.3rem" }}
            >
              <strong>Number of Units:</strong>
              {numberOfUnits}
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: "1.3rem" }}
            >
              <strong>Available Units:</strong>
              {availableUnits}
            </Typography>
          </div>
          {/* display the others */}
          {images.map((imageSrc) => (
            <img
              key={imageSrc}
              src={imageSrc}
              style={{ width: "30dvw", height: "30dvh", padding: "1dvw" }}
            />
          ))}
        </div>
        <div className="propertyTenants">
          <Typography sx={{ color: theme.palette.text.primary }} variant="h5">
            <strong> All Tenants</strong>
          </Typography>
          {propertyTenants.map((tenant, key) => (
            <Box key={key}>
              <Typography>{tenant.tenantFullName}</Typography>
            </Box>
          ))}
      
        </div>
        {/* all fields required alert */}
        <Snackbar
          open={allFieldsRequiredAlert}
          autoHideDuration={6000}
          onClose={handleCloseAllFieldsRequiredAlert}
        >
          <Alert severity="error">All fields are required</Alert>
        </Snackbar>
      </div>
